# vswift-cli

该脚手架是基于nodejs编写，适用于快速创建统一标准的前端项目模板，目前支持创建管理端和移动端通用模板，管理端所用的基础UI库为 [Element Plus](https://element-plus.gitee.io/) ，移动端所用的基础UI库为 [Vant](https://vant-contrib.gitee.io/vant) 。

## 安装

npm

```shell
npm install -g @vswfit/cli
```

## 发布

```shell
npm run release or yarn release
```

## 使用说明

1. 终端输入：

```shell
vswift create
```

2. 根据提示输入并选择创建信息：

```shell
➜ vswift create
? Input your project name: (project-demo)
? Choose a template: vue-admin | vue-mobile
? Pull source: Pull from local @vswift/cli service | Pull the latest from github
Cloning into 'project-demo'...
Your project template has been created, see: ....../project-demo
```

#### 选项说明

- ***Input your project name:*** 最终创建的项目名称
- ***Choose a template:*** *vue-admin* 选项表示管理端模板，*vue-mobile* 选项表示移动端H5模板
- ***Pull source:*** *Pull from local @vswift/cli service* 选项表示从安装到全局的como-cli服务中拉取模板，*Pull the latest from github* 选项表示直接从github上拉取最新的模板，但是可能存在破坏性或实验性的代码，拉取下来之后请及时删除或更新 .git 的远程链接，可执行终端命令：git remote set-url origin [git url]

