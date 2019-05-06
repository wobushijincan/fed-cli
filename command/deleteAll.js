'use strict'
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')
const fs = require('fs')

module.exports = () => {
    co(function *() {
        console.log(chalk.yellow('\n ################## deleted all templates ##############'))
        // 接收用户输入的参数
        let besure = yield prompt('\n Are you sure that you will remove all templates ? y or n。')

        // 删除对应的模板
        if (besure === 'y' && Object.keys(config.tpl).length) {
            config.tpl = {}
        } else {
            console.log(chalk.red(' all templates is clean!'))
            process.exit()
        }
        
        // 写入template.json
        fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config),     'utf-8', (err) => {
            if (err) console.log(err)
            console.log(chalk.green('Template deleted!'))
            console.log(chalk.grey('The last template list is: \n'))
            console.log(config)
            console.log('\n')
            process.exit()
        })
    })
}