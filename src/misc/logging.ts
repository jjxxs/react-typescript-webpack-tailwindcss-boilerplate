import log, {LogLevelDesc} from "loglevel";

/** Log level set in the webpack config */
declare var __LOG_LEVEL__: LogLevelDesc

/** Initializes logging with the log level set in the webpack config */
export const initLogging = () => {
    log.setLevel(__LOG_LEVEL__)
    log.info(`Logging initialized with level ${__LOG_LEVEL__}`)
}

export default log