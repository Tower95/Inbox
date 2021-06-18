const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiled = require('./compile');

const provider = new HDWalletProvider(
    'lawsuit dumb spider dizzy flag cook jazz wave clip fire juice banner',
    'https://rinkeby.infura.io/v3/75f320976e904cb780a140fe348d1497'
);

const web3 = new Web3(provider);

const deployC = async () => {
    const accuonts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from accont', accuonts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiled.interface))
        .deploy({ data: compiled.bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accuonts[0] });

    console.log('Contract deployd to', result.options.address);
};

deployC();

