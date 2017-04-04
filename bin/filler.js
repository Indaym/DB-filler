#! /usr/bin/env node
'use strict'
const filler = require('../lib/index');

const params = process.argv;

if (params.length < 3) {
  console.error('no config file provided');
  return -1;
}

filler(params[2]);


// check for update
// const fs = require('fs');
// const ld = require('lodash').defaults;
// const pkg = JSON.parse(fs.readFileSync(__dirname + '../package.json'));

// require('update-notifier')({
//   pkg: ld(pkg, { version: '0.0.0'})
// }).notify();
