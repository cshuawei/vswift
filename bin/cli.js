#!/usr/bin/env node

// Node CLI必须有这样的开头
// 如果是Linux或macOS系统还需要修改文件读写权限为 755
// 执行命令行 chmod 755 [cli.js path] 实现修改

const argv = process.argv.slice(2)
const [action] = argv

if (action !== 'create') throw new Error(`Unsupported command parameters: ${action}`)

import ora from 'ora'
import inquirer from 'inquirer'
import shell from 'shelljs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const dirname = fileURLToPath(import.meta.url)

Object.defineProperty(global, '__dirname', {
  value: dirname
})

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Input your project name:',
    default: 'project-demo'
  },
  {
    type: 'rawlist',
    name: 'template',
    message: 'Choose a template:',
    choices: ["vue-admin", "vue-mobile"],
    default: 0
  },
  {
    type: 'rawlist',
    name: 'source',
    message: 'Pull source:',
    choices: [
      {
        name: 'Pull from local vswift-cli service',
        value: 'cli'
      },
      {
        name: 'Pull the latest from github',
        value: 'github'
      }
    ],
    default: 0
  },
]).then(answers => {
  const { name, template, source } = answers
  const { cp, exec } = shell
  const dest = join(process.cwd(), `/${name}`)
  const spinner = ora('Please wait...').start()
  if (source === 'cli') {
    const source = join(__dirname, '../../', `/template/${template}/`)
    cp('-r', source, dest)
    spinner.succeed(`Your project template has been created, see: ${dest}`)
    // console.log(`Your project template has been created, see: ${dest}`)
  } else {
    exec(`git clone -b master https://github.com/cshuawei/${template}-template.git ${name}`, function (code) {
      if (code !== 0) {
        spinner.fail(`Pull failed, please check if your network is working properly.`)
        return
      }
      // throw new Error('Pull failed, please check if your network is working properly.')
      spinner.succeed(`Your project template has been created, see: ${dest}`)
      // console.log(`Your project template has been created, see: ${dest}`)
    })
  }
}).catch(err => {
  console.log(err)
})