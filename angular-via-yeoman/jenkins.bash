#!/bin/bash

set -o xtrace

export PATH="/usr/local/bin/:${PATH}"
export NODE_PATH="/usr/local/lib/node_modules"
/usr/local/bin/npm install
/usr/local/bin/bower install
./node_modules/.bin/grunt --no-color --stack --verbose jshint test build
