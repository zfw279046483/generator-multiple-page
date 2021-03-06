const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ]).then(answer => {
      this.answer = answer
    })
  }
  writing() {
    const templates = [
      'public/favicon.ico',
      'src/assets/images/pic.jpg',
      'src/assets/script/app.js',
      'src/assets/style/_variable.scss',
      'src/assets/style/common.scss',
      'src/assets/views/index/index.scss',
      'src/assets/views/index/index.js',
      'src/assets/views/index/images/pic.jpg',
      'src/zhtml/layout/head.html',
      'src/zhtml/layout/foot.html',
      'src/zhtml/index.html',
      '.npmignore',
      'package.json',
      'pages.config.js',
      'README.md'
    ]

    templates.forEach(item => {
      // item: 每个文件的路径
      const src = item === '.npmignore' ? '.gitignore' : item
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(`${this.answer.name}/${src}`),
        this.answer
      )
    })
  }
}