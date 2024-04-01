# LogForge

## Simple logger module

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# Installation

```bash
$ npm install @deepak-delta/logforge
```

# Quick start

The default settings are:

- colorize: false
- log: [ISO timestamp] [level] [message] [category] [metadata]

```js
// /app/index.js
import { logger } from 'logforge'

logger.info('App', 'Application started', {
  version: '1.0.0',
  environment: 'production',
})

output
{"timestamp":"2024-04-01T10:31:15.174Z","level":"DEBUG","category":"App","message":"Application started","metadata":{"version":"1.0.0","environment":"production"}}
```

# Configuration

The default configuration can be changed by creating `lfconfig.json` file in the root directory of the project

`lfconfig.json`

```js
{
  "writeToFile": "false",
  "logFilePath": "",
  "timeStamp": "false",
  "setColor": "true"
}


```

## Configure options

| Name        | Type    | Default value | Description                       |
| ----------- | ------- | ------------- | --------------------------------- |
| writeToFile | Boolean | fasle         | Output the log to file            |
| logFilePath | String  | null          | Path of log file                  |
| timeStamp   | Boolean | true          | Turns on/off the timestamp        |
| setColor    | Boolean | false         | Turns on/off the colorized output |

## Configure options

- loglevel - valid values are `info`, `error`, `warn`, and `debug`

### Found a bug?

Feel free to open an issue on github.

### Want to contribute?

Great! fork this repository and make a pull request😊.
