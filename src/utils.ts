import fs from 'fs'
import { LogLevel } from './config'

export const formatLogMessage = (
  level: LogLevel,
  category: string,
  message: string,
  metadata?: any
): string => {
  const timestamp = new Date().toISOString()
  const logData = {
    timestamp,
    level,
    category,
    message,
    metadata: metadata ? JSON.stringify(metadata) : undefined,
  }

  return JSON.stringify(logData)
}

export const writeToFile = (filePath: string, message: string): void => {
  fs.appendFileSync(filePath, message + '\n')
}
