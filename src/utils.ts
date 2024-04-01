import fs from 'fs'
import { LogLevel } from './config'

export const formatLogMessage = (
  config: any,
  level: LogLevel,
  message: string,
  category?: string,
  metadata?: any
): string => {
  if (config.timestamp === 'true') {
    const timestamp = new Date().toISOString()
    const logData = {
      timestamp,
      level,
      message,
      category,
      metadata: metadata ? metadata : undefined,
    }

    return JSON.stringify(logData)
  } else {
    return JSON.stringify({
      level,
      message,
      category,
      metadata: metadata ? metadata : undefined,
    })
  }
}

export const writeToFile = (filePath: string, message: string): void => {
  fs.appendFileSync(filePath, message + '\n')
}
