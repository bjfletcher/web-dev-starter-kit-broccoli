var pickFiles = require('broccoli-static-compiler');
var compileEs6 = require('broccoli-es6-concatenator');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');

// note: all paths are relative to the dir that the packages.json file is in

// inputFiles is in inputTree, outputFile is in serve's tmp dir or build's dist dir
var js = compileEs6('js', {
    inputFiles: [
        '**/*.js'
    ],
    outputFile: '/app.js' // normally 'app.js' but plugin wants absolute path
});

// 1st argument is array of inputTrees - compileSass expects an array of input
// trees, hence the array brackets
// 2nd argument is in inputTree, the main Sass file
// 3rd argument is in serve's tmp dir or build's dest dir
var css = compileSass(['sass'], 'main.scss', 'app.css');

var html = pickFiles('html', { srcDir: '.', destDir: '.' });

module.exports = mergeTrees([js, css, html]);
