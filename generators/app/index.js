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
      'Welcome to the cat\'s meow ' + chalk.red('GeneratorVue') + ' generator!'
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
        name: 'vue-resource',
        value: 'includeResource',
        checked: false
      }, {
        name: 'stylus',
        value: 'includeStylus',
        checked: false
      }]
    }]

    this.prompt(prompts, function (answers) {
      var features = answers.features || []
      this.projectName = answers.project

      function hasFeature (feat) { return features.indexOf(feat) !== -1 }

      this.includeRouter = hasFeature('includeRouter')
      this.includeResource = hasFeature('includeResource')
      this.includeStylus = hasFeature('includeStylus')

      this.config.set('includeRouter', this.includeRouter)
      this.config.set('includeResource', this.includeResource)
      this.config.set('includeStylus', this.includeStylus)
      done()
    }.bind(this))
  },

  writing: function () {
    this._copyTpl('_package.json', 'package.json')
    this._copy('_devindex.html', './build/index.html')
    this._copy('_index.html', 'index.html')
    this._copyTpl('_main.js', './src/main.js')
    this._copyTpl('_app.vue', './src/app.vue')
    this._copyTpl('_webpack.config.js', 'webpack.config.js')
    this._copyTpl('_webpack.production.js', 'webpack.production.js')
    this._copyTpl('_webpack.server.js', 'webpack.server.js')
    this._copy('_gitignore', '.gitignore')
    this._copy('_eslintrc', '.eslintrc')
    if (this.config.get('includeRouter')) {
      this._copy('_router-config.js', './src/router-config.js')
    }
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
