'use strict'
const config = require('../templates')
const chalk = require('chalk')

module.exports = () => {
     console.log(chalk.yellow('\n ################## list ##############'))
     Object.keys(config.tpl).forEach(idx => {
      console.log(`temp: ${idx}    url: ${config.tpl[idx].url}    branch: ${config.tpl[idx].branch}}`)
     })
     console.log(chalk.yellow('\n'))
     process.exit()
}