const Generator = require('yeoman-generator')

module.exports = class extends Generator{
  prompting () {
    return this.prompt ([
      {
        type: 'input',
        name: 'name',
        message: 'Your pages name',
        answer: this.appname
      }
    ]).then(answer => {
      this.answer = answer
    })
  }
  writing () {
    const templates = [
      'src/assets/views/index/images/pic.jpg',
      'src/assets/views/index/index.js',
      'src/assets/views/index/index.scss',
      'src/zhtml/index.html'
    ]

    templates.forEach(item => {
      // item: 每个文件的路径
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item.replace(/index/g, this.answer.name)),
        this.answer
      )
    })
  }
}