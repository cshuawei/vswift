# vswift-cli

The scaffolding is based on nodejs and is suitable for quickly creating unified standard front-end project templates. Currently, it supports the creation of general templates for management and mobile terminals. The basic UI library used by the management terminal is [Element Plus](https://element-plus.gitee.io/), and the basic UI library used by the mobile terminal is [Vant](https://vant-contrib.gitee.io/vant) 。

## Install

npm

```shell
npm install -g @vswfit/cli
```

## Release

```shell
npm run release
```

## Instructions for use

1. Terminal input

```shell
vst create
```

2. Follow the prompts to enter and choose to create information

```shell
➜ vst create
? Input your project name: (project-demo)
? Choose a template: vue-admin | vue-mobile
? Pull source: Pull from local vswift-cli service | Pull the latest from github
Cloning into 'project-demo'...
Your project template has been created, see: ....../project-demo
```

#### Option description

- ***Input your project name:*** The name of the final project created
- ***Choose a template:*** *vue-admin* The option represents the management terminal template, *vue-mobile* The option represents the mobile terminal H5 template
- ***Pull source:*** *Pull from local vswift-cli service* The option means to pull the template from the vswift-cli service installed globally, *Pull the latest from github* The option means to pull the latest template directly from github, But there may be destructive or experimental code, please delete or update the remote link of .git in time after pulling it down, Executable terminal commands: git remote set-url origin [git url]

test-001