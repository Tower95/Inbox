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
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there');
    });

    it('cam change the message', async () => {
        await inbox.methods.setMessage('Bye there').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Bye there');
    });
});