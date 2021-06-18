'use strict'
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//define the path where is the contract.
const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');

//read the code of our contract.
const source = fs.readFileSync(inboxPath, 'utf8');

//esxport the object compiled of our contract.
const compile = solc.compile(source, 1).contracts[':Inbox'];

module.exports = compile;