'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the cat\'s meow ' + chalk.red('GeneratorVue') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'project',
      message: 'What is the project\'s name?',
      default: this.appname
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: [{
        name: 'direct router',
        value: 'includeDirect',
        checked: false
      }, {
        name: 'vue-resource',
        value: 'includeResource',
        checked: false
      }]
    }];

    this.prompt(prompts, function (answers) {
      var features = answers.features || [];
      this.projectName = answers.project;

      function hasFeature(feat) { return features.indexOf(feat) !== -1; }

      this.includeDirect = hasFeature('includeDirect');
      this.includeResource = hasFeature('includeResource');

      this.config.set('includeDirect', this.includeDirect);
      this.config.set('includeResource', this.includeResource);
      done();
    }.bind(this));
  },

  writing: function () {
    this._copyTpl('_package.json', 'package.json');
    this._copy('_devindex.html', './build/index.html');
    this._copy('_index.html', 'index.html');
    this._copyTpl('_main.js', './src/main.js');
    this._copy('_app.vue', './src/app.vue');
    this._copy('_webpack.config.js', 'webpack.config.js');
    this._copy('_webpack.production.js', 'webpack.production.js');
    this._copy('_gitignore', '.gitignore');
  },

  _copy: function(from, to) {
    this.fs.copy(this.templatePath(from), this.destinationPath(to));
  },

  _copyTpl: function(from, to) {
    this.fs.copyTpl(this.templatePath(from), this.destinationPath(to), this);
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});
