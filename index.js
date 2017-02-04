'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const http = require('http');
const https = require('https');
const favicon = require('serve-favicon');

const configuration = fs.readFileSync(path.join(__dirname, 'config.json'));

// TODO Read configuration
// - SSL
//  - private key
//  - certificate
// - ports
//  - http
//  - https
// - [favicon]
// - pages
//  - index <- build this based on children?
//  - children
