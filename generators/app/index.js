'use strict'
var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../../package.json')
  },

  prompting: function () {
    var done = this.async()

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the cat\'s meow ' + chalk.red('vuejs') + ' generator!'
    ))

    var prompts = [{
      type: 'input',
      name: 'project',
      message: 'What is the project\'s name?',
      default: this.appname
    }, {
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: [{
        name: 'vue-router',
        value: 'includeRouter',
        checked: false
      }, {
        name: 'vue-strap',
        value: 'includeVuestrap',
        checked: false
      }]
    }]

    this.prompt(prompts, function (answers) {
      this.features = answers.features || []
      this.projectName = answers.project

      this._configFeatures([
        'includeRouter',
        'includeVuestrap'
      ])

      done()
    }.bind(this))
  },

  _hasFeature: function (feat) {
    return this.features.indexOf(feat) !== -1
  },

  _configFeature: function (feat) {
    this[feat] = this._hasFeature(feat)
    this.config.set(feat, this[feat])
  },

  _configFeatures: function (possibleFeatures) {
    possibleFeatures.forEach(this._configFeature.bind(this))
  },

  writing: function () {
    this._copyTpl('_package.json', 'package.json')
    this._copyTpl('_index.html', 'index.html')
    this._copyTpl('_main.js', './src/main.js')
    this._copyTpl('_app.vue', './src/app.vue')
    this._copyTpl('_styles.css', './src/styles.css')
    this._copyTpl('_webpack.config.js', 'webpack.config.js')
    this._copyTpl('_webpack.production.js', 'webpack.production.js')
    this._copy('_gitignore', '.gitignore')
    this._copy('_babelrc', '.babelrc')
    this._copy('_eslintrc', '.eslintrc')
    this._copy('_editorconfig', '.editorconfig')
  },

  _copy: function (from, to) {
    this.fs.copy(this.templatePath(from), this.destinationPath(to))
  },

  _copyTpl: function (from, to) {
    this.fs.copyTpl(this.templatePath(from), this.destinationPath(to), this)
  },

  install: function () {
    this.installDependencies({bower: false})
  }
})
