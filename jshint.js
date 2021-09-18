#!/usr/bin/env node

'use strict';
const fs = require('fs');
var path = require('path');
var readline = require('readline');
var exec = require('child_process').exec;

var rl = readline.createInterface({
    input: process.stdin,
    output: null,
    terminal: false
});

// Normalise path to local jshint executable.
//var jshintExec = 'showdown makehtml -m -e showdown-highlight -i '
var jshintExec = 'npx marked -i '


var paths = [];

function jshint(paths) {
  for (let i = 0; i <= paths.length-1; i++){
    if (fs.statSync(`${paths[i]}`).mtimeMs.toFixed(0) < fs.statSync(`html/${paths[i].slice(0,paths[i].length - 3)}.html`).mtimeMs.toFixed(0)) { console.log(`${paths[i]}: up to date`); continue };
    var command = [

        jshintExec,paths[i], ' -o html/', paths[i].slice(0,paths[i].length - 3), '.html', 

        ' && npx vcat -s helper/header html/', paths[i].slice(0,paths[i].length - 3), '.html helper/footer -o html/', paths[i].slice(0,paths[i].length - 3), '-C.html'


    ].join('');
    //console.log(command)
    exec(command, function(error, stdout, stderr) {
        if (stdout) {
            console.log(stdout);
        }
        if (stderr) {
            console.log(stderr);
        }
    });
  }
}

rl.on('line', function(srcPath) {
    paths.push(srcPath);
});

rl.on('close', function() {
    jshint(paths);
    //console.log("PATHS: ", paths)
});
