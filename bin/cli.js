#!/usr/bin/env node

// Node CLI必须有这样的开头
// 如果是Linux或macOS系统还需要修改文件读写权限为 755
// 执行命令行 chmod 755 [cli.js path] 实现修改

const argv = process.argv.slice(2)
const [action] = argv

if (action !== 'create') throw new Error(`Unsupported command parameters: ${action}`)

const inquirer = require('inquirer')
const shell = require('shelljs')
const path = require('path')

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
        name: 'Pull from local como-cli service',
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
  const dest = path.join(process.cwd(), `/${name}`)
  if (source === 'cli') {
    const source = path.join(__dirname, `/template/${template}/`)
    cp('-r', source, dest)
    console.log(`Your project template has been created, see: ${dest}`)
  } else {
    exec(`git clone -b master https://github.com/cshuawei/${template}-template.git ${name}`, function (code) {
      if (code !== 0) throw new Error('Pull failed, please check if your network is working properly.')
      console.log(`Your project template has been created, see: ${dest}`)
    })
  }
}).catch(err => {
  console.log(err)
})