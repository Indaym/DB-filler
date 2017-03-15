#! /usr/bin/env node
'use strict'
const filler = require('../lib/index');

filler();


// check for update
const fs = require('fs');
const ld = require('lodash').defaults;
const pkg = JSON.parse(fs.readFileSync(__dirname + '../package.json'));

require('update-notifier')({
  pkg: ld(pkg, { version: '0.0.0'})
}).notify();
