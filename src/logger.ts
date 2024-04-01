import { formatLogMessage, writeToFile } from './utils'
import { LogLevel } from './config'

const logForge = ({ config }) => {
  const log = (level, category, message, metadata) => {
    const logMessage = formatLogMessage(level, category, message, metadata)
    console.log(logMessage)

    if (config.writeToFile === 'true') {
      if (!config.logFilePath) {
        console.error('Error: logFilePath is empty or null')
        return
      }

      writeToFile(config.logFilePath, logMessage)
    }
  }

  const info = (category, message, metadata) => {
    log(LogLevel.INFO, category, message, metadata)
  }

  const error = (category, message, metadata) => {
    log(LogLevel.ERROR, category, message, metadata)
  }

  const warn = (category, message, metadata) => {
    log(LogLevel.WARN, category, message, metadata)
  }

  const debug = (category, message, metadata) => {
    log(LogLevel.DEBUG, category, message, metadata)
  }

  return {
    log,
    info,
    error,
    warn,
    debug,
  }
}
export default logForge
