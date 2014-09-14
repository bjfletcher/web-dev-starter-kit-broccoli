var compileEs6ToEs5 = require('broccoli-traceur');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');

// note: all paths are relative to the dir that the packages.json file is in

var js = compileEs6ToEs5('js', {});

// need the loader.js which has the require() definition for running code on ES5
var lib = 'lib';

// 1st argument is array of inputTrees - compileSass expects an array of input
// trees, hence the array brackets
// 2nd argument is the main Sass file in any of the first argument's trees
// 3rd argument is in serve's tmp dir or build's dist dir
var css = compileSass(['sass'], 'main.scss', 'app.css');

// srcDir is in first argument's dir and destDir is in serve's tmp dir or build's dist dir
var html = 'html';

//module.exports = mergeTrees([js, vendor, css, html]);
module.exports = mergeTrees([js, lib, css, html]);
