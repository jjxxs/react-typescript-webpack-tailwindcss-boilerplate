# react-typescript-webpack-tailwindcss-boilerplate
A boilerplate for React, Typescript, Webpack and TailwindCSS:
- **Build:** TypeScript, Webpack
- **Linting:** ESLint
- **Styling:** TailwindCSS
- **Internationalization:** i18next

Includes various commonly used packages:
- react-router
- react-window
- react-virtualized-auto-sizer
- react-popper
- react-use
- ...

As well as some useful utilities:
- yup
- date-fns
- websocket-ts
- loglevel
- ...

***Dependencies last updated: 2023-11-19***

## Development
1. Clone the repository
2. Run `npm run install`
3. Run `npm run serve` to start the development server

The development server will automatically open a browser window with the application running. 
Any changes to the source code will automatically be recompiled and the browser will be refreshed.
Requests to `/api/v1` will be proxied to `http://localhost:8080`.

## Production
1. Run `npm run build` to build the application