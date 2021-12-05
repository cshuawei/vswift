const shell = require('shelljs')
const inquirer = require('inquirer')
const package = require('../package.json')

inquirer.prompt([
  {
    type: 'list',
    name: 'tag',
    message: 'Please Choose a tag:',
    choices: ["latest", "beta", "stable"]
  },
  {
    type: 'input',
    name: 'version',
    message: `Please input the release version(current ${package.version}):`,
    validate (input) {
      const done = this.async()
      if (!input) {
        done('You must input the release version')
        return
      }
      done(null, true)
    }
  },
  {
    type: 'confirm',
    name: 'confirm',
    message (answer) {
      return `Are you sure to release the next version ${answer.version}?`
    }
  }
]).then(answers => {
  const { tag, version, confirm } = answers
  const { exec } = shell
  if (confirm) {
    exec(`yarn publish --tag ${tag} --new-version ${version}`, function (code) {
      if (code !== 0) throw new Error('Release failed')
      console.log('Release success!!! See: https://www.npmjs.com/package/como-cli')
    })
  }
}).catch(err => {
  console.log(err)
})