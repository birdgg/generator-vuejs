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
    }];

    this.prompt(prompts, function (answers) {
      this.projectName = answers.project;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this
      );
      this.fs.copy(
        this.templatePath('_app.vue'),
        this.destinationPath('./src/app.vue')
      );
      this.fs.copy(
        this.templatePath('_index.html'),
        this.destinationPath('index.html')
      );
      this.fs.copy(
        this.templatePath('_main.js'),
        this.destinationPath('./src/main.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});
