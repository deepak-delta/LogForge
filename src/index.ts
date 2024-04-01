import fs from 'fs'
import path from 'path'
import logForge from './logger'

const configFilePath = path.resolve(process.cwd(), 'lfconfig.json')
const isConfigFileExists = fs.existsSync(configFilePath)

let loggerUserConfig = {}

if (isConfigFileExists) {
  try {
    const configFileContent = fs.readFileSync(configFilePath, 'utf-8')
    loggerUserConfig = JSON.parse(configFileContent)
  } catch (error) {
    console.error('Error reading or parsing configuration file:', error)
  }
} else {
  console.error('Configuration file not found:', configFilePath)
}

export const logger = logForge({ config: loggerUserConfig })

export default logger
