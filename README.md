# Gulpify

Gulpify is a project inspired by [Gruntify](https://github.com/vitorbritto/gruntify) and [Makefy](https://github.com/vitorbritto/makefy). It's a shortcut to start a new project with Gulp or place it in your current project.

You'll install **only once** all dependencies in **development** environment, define your tasks, set your configuration and build it. All the tasks are well commented with specific options for each plugin.

> **TODO LIST:** you can check updates notes [here](https://github.com/vitorbritto/gulpify/issues/)

## Getting Started

So, It's quite simple to get start. Check the following steps to set up your gulpfile with Gulpify.

### Installation

First of all, make sure you have [NodeJS](http://nodejs.org/) and [Gulp](http://gulpjs.com/) installed. If you want to use [Bower](http://bower.io/), make sure you have it installed too.

**New project**

```bash
# 1. Clone this repository and access the new project directory
$ git clone git://github.com/vitorbritto/gulpify.git [projectname]
$ cd [projectname]

# 2. Execute the makefile
$ make new

# 3. Set up your configuration
# 4. Profit!
```

**Existing Project (non Gulp project)**

```bash
# 1. Clone this repository (make sure to be inside your project directory)
$ git clone git://github.com/vitorbritto/gulpify.git

# 2. Execute the makefile
$ make current

# 3. Set up your configuration
# 4. Profit!
```

### How it works?

#### 1. Configuration

The `gulp.conf.js` file contain all the necessary settings for your build process. Check out a detailed diagram of the initial configuration:

```
///////////////////////////////////////////
// TASK CONFIG                           //
///////////////////////////////////////////

'use strict';

var pkg = require('./package');

module.exports = {

    // INITIAL CONFIGURATION

    // Folders
    modules     : 'app/scripts/modules',
    requires    : 'app/scripts/requires',
    test: {
        main    : 'spec',
        helpers : 'spec/helpers',
        modules : 'spec/modules'
    },

    src: {
        main    : 'src',
        styles  : 'src/styles/*.scss',
        scripts : 'src/scripts/*.js',
        images  : 'src/images/*.{png,jpg,gif}',
        fonts   : 'src/fonts'
    },
    dist: {
        main    : 'public',
        styles  : 'public/styles/',
        scripts : 'public/scripts/',
        images  : 'public/images/*',
        fonts   : 'public/fonts/'
    },

    // TASKS CONFIGURATION
    tasks: {
        imagemin    : 'imagemin',
        jslint      : 'jslint',
        jsmin       : 'jsmin',
        jsconcat    : 'jsconcat',
        styles      : 'styles',
        cssmin      : 'cssmin',
        cssconcat   : 'cssconcat',
        html        : 'html',
        images      : 'images',
        browsersync : 'browsersync',
        zip         : 'zip'
    },

    syncConfig: {
        files: ['styles/*.css','scripts/*.js', 'public/*.html', 'public/images/*.{png,jpg,gif}'],
        server: {
            baseDir: 'public',
            index: 'index.html'
        }
    }
}
```

#### 2. Select Tasks

Inside the `./task` folder, you'll find each task. For **styles**, you need to select which task configuration you want to run with Gulp. Just **uncomment** the selected one and **comment** the other(s) you don't want to use.

> Notes: for `styles` tasks, if you select **none**, `cssmin` task will be used by default.

See examples bellow:

**Styles**

```js
gulp.task(config.tasks.styles, function() {

    // Sass
    return gulp.src(config.src.styles)
        .pipe(sass())
        .pipe(banner())
        .pipe(gulp.dest(config.dist.styles));

    // Stylus
    return gulp.src(config.src.styles)
        .pipe(stylus({
            use: ['nib']
        }))
        .pipe(plumber())
        .pipe(gulp.dest(config.dist.styles));

});
```

#### TODO

- **Views:** Jade, EJS, Handlebars
- **Unit Tests:** Mocha, Jasmine, QUnit
- **Modules:** RequireJS, Browserify, UMD

### 3. Execute tasks

- `gulp` or `gulp start`: Initialize and watch for changes
- `gulp styles`: Optimize CSS
- `gulp scripts`: Optimize JS
- `gulp images`: Optimize Images
- `gulp build`: Build project

## Troubleshooting

During install some of you may encounter some issues, most of this issues can be solved by one of the following tips.
If you went through all this and still can't solve the issue, feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM, Bower or Gulp

Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*, usually updating those tools to the latest version solves the issue.

Updating NPM:
```
$ npm update -g npm
```

Updating Gulp:
```
$ npm update gulp
```

Updating Bower:
```
$ npm update -g bower
```

#### Cleaning NPM and Bower cache

NPM and Bower has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

NPM Clean Cache:
```
$ npm cache clean
```

Bower Clean Cache:
```
$ bower cache clean
```

## Authors

Vitor Britto <code@vitorbritto.com.br> & Daniel Castro <dancasttro@gmail.com>

[MIT License](http://vitorbritto.mit-license.org/)
