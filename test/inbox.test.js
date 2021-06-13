'use strict'
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const compiled = require('../compile');
let accounts; //our accounts in the Blockchain.
let inbox; // our contract.
beforeEach(async () => {
    //Get a list of all account in the Blockchain Ethereum VN.
    accounts = await web3.eth.getAccounts();
    //use one of those account to deploy.

    //Deploy contract (called Inbox).
    inbox = await new web3.eth.Contract(JSON.parse(compiled.interface))
        .deploy({
            data: compiled.bytecode,
            arguments: ['Hi there']
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});