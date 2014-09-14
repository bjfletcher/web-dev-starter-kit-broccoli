var compileEs6ToEs5 = require('broccoli-es6-concatenator');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');

// note: all paths are relative to the dir that the packages.json file is in

// inputFiles is in js dir, outputFile is in serve's tmp dir or build's dist dir
var js = compileEs6ToEs5('js', {
    outputFile: '/app.js', // normally 'app.js' but plugin wants absolute path
    loaderFile: 'lib/loader.js', // at top of app.js is require() definition
    inputFiles: [
        '**/*.js'
    ],
    ignoredModules: ['lib/loader'], // already in loaderFile above
    wrapInEval: false
});

// 1st argument is array of inputTrees - compileSass expects an array of input
// trees, hence the array brackets
// 2nd argument is the main Sass file in any of the first argument's trees
// 3rd argument is in serve's tmp dir or build's dist dir
var css = compileSass(['sass'], 'main.scss', 'app.css');

// when a tree is a string, it means a tree in this string's dir
// in this case, a tree is made of the 'html' dir
var html = 'html';

//module.exports = mergeTrees([js, vendor, css, html]);
module.exports = mergeTrees([js, css, html]);
