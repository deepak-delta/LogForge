import fs from 'fs'
import path from 'path'
import logForge from './logger'

const configFilePath = path.resolve(process.cwd(), 'lfconfig.json')
const isConfigFileExists = fs.existsSync(configFilePath)

let loggerUserConfig = {}
const defaultConfig = {
  writeToFile: 'false',
  logFilePath: '',
  timeStamp: 'true',
  setColor: 'false',
}

if (isConfigFileExists) {
  try {
    const configFileContent = fs.readFileSync(configFilePath, 'utf-8')
    loggerUserConfig = JSON.parse(configFileContent)
  } catch (error) {
    console.error('Error reading or parsing configuration file:', error)
  }
} else {
  loggerUserConfig = defaultConfig
}

export const logger = logForge({ config: loggerUserConfig })

export default logger
