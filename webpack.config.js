/** Node/Webpack imports */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')

/** Webpack rules */
const jsRule = {test: /\.js(x?)$/i, exclude: /node_modules/, use: ["babel-loader"]}
const tsRule = {test: /\.ts(x?)$/i, exclude: /node_modules/, use: ["babel-loader", "ts-loader"]}
const cssRule = {test: /\.css$/i, sideEffects: true, use: ['style-loader', 'css-loader', 'postcss-loader']}
const svgRule = {test: /\.svg$/i, exclude: /node_modules/, use: [{loader: 'file-loader', options: {name: '[name].[ext]', outputPath: 'svg/'}}]}

/** Common configuration for all environments */
const webpackBase = {
    entry: path.join(__dirname, "src", "index.tsx"),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"),
            templateParameters: {
                buildTime: Date.now(),
            }
        }),
        new DefinePlugin({
            __LOG_LEVEL__: JSON.stringify(process.env.LOG_LEVEL || 'trace'),
        })
    ],
    module: {rules: [jsRule, tsRule, cssRule, svgRule]},
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "react": path.resolve(__dirname, "node_modules", "react"),
            "react-dom": path.resolve(__dirname, "node_modules", "react-dom"),
        }
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? false : 'warning',
        maxEntrypointSize: 10 * 1024 * 1024, // 10 MiB
        maxAssetSize: 10 * 1024 * 1024, // 10 MiB
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        proxy: {
            'api/v1': 'http://localhost:8080'
        },
        historyApiFallback: {
            rewrites: [
                {from: /.*main.js$/, to: '/main.js'},
                {from: /.*main.js.map$/, to: '/main.js.map'},
            ]
        },
        onBeforeSetupMiddleware: devServer => {
            if (!devServer) throw new Error('webpack-dev-server is not defined')
            devServer.app.use((req, res, next) => {
                console.log(`[${req.method}] ${req.url}`)
                next()
            })
        }
    }
}

const productionDefaults = {
    ...webpackBase,
    mode: 'production',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.min.js",
    },
    optimization: {
        usedExports: true,
        minimize: true
    },
}

const developmentDefaults = {
    ...webpackBase,
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js",
    },
    optimization: {
        usedExports: false,
        minimize: false
    },
}

module.exports = [/*productionDefaults,*/ developmentDefaults]