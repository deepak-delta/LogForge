import {
  blue,
  bold,
  gray,
  green,
  red,
  underline,
  white,
  yellow,
} from 'colorette'
import { formatLogMessage, writeToFile } from './utils'
import { LogLevel } from './config'

const logForge = ({ config }) => {
  const log = (level, message, category?, metadata?) => {
    const logMessage = formatLogMessage(
      config,
      level,
      message,
      category,
      metadata
    )

    if (config.setColor === 'true') {
      switch (level) {
        case LogLevel.INFO:
          console.log(blue(logMessage))
          break
        case LogLevel.ERROR:
          console.log(red(logMessage))
          break
        case LogLevel.WARN:
          console.log(yellow(logMessage))
          break
        case LogLevel.DEBUG:
          console.log(green(logMessage))
          break
        default:
          console.log(white(logMessage))
      }
    } else {
      console.log(logMessage)
    }

    if (config.writeToFile === 'true') {
      if (!config.logFilePath) {
        console.error('Error: logFilePath is empty or null')
        return
      }

      writeToFile(config.logFilePath, logMessage)
    }
  }

  const info = (message, category?, metadata?) => {
    log(LogLevel.INFO, message, category, metadata)
  }

  const error = (message, category?, metadata?) => {
    log(LogLevel.ERROR, message, category, metadata)
  }

  const warn = (message, category?, metadata?) => {
    log(LogLevel.WARN, message, category, metadata)
  }

  const debug = (message, category?, metadata?) => {
    log(LogLevel.DEBUG, message, category, metadata)
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
