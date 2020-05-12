// HOLDS THE BLOCKCHAIN CLASS

const Block = require('./block');

class Blockchain {

    constructor() {
        // INIT THE BLOCKCHAIN WITH THE GENESIS BLOCK FROM block.js
        this.chain = [Block.genesisBlock()];
    }

    // ADD BLOCK.. ie add the data
    addBlock(data) {
        // GETTING THE LAST BLOCK IN THE CHAIN
        const lastBlock = this.chain[this.chain.length -1];

        // GENERATE A NEW BLOCK
        const block = Block.addBlock(lastBlock, data);
        // PUSH NEW BLOCK TO CHAIN
        this.chain.push(block);

        return block;
    }

    // CHAIN VALIDATION
    isValidChain(chain) {

        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesisBlock())) { return false; }

        for (let i=1; i<chain.length; i++) {

            const block = chain[i];
            const lastBlock = chain[i-1];

            if (block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block)) { return false; }
    
        }

        return true;

    }

    // IF CHAIN IS VALID REPLACE CHAIN
    replaceChain(newChain) {

        if (newChain.length <= this.chain.length) {
            
            console.log('Received chain is not longer than the current chain');
            return; // Add a message here to notify front-end

        } else if (!this.isValidChain(newChain)) {
            
            console.log('The received chain is not valid');
            return;

        }

        this.chain = newChain;
        console.log('New chain is valid and will be added, successfully.')

    }

}

module.exports = Blockchain;