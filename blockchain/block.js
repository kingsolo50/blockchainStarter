const SHA256 = require('crypto-js/sha256'), moment = require('moment');

class Block {

    constructor(timestamp, lastHash, hash, data)  {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() { // BLOCK ATTRIBUTES DISPLAY // BLOCK DISPLAY // BLOCK CONSOLE.LOG LAYOUT

        return `              
            Timestamp   : ${this.timestamp}
            Last hash   : ${this.lastHash.substring(0, 10)}            
            Hash        : ${this.hash.substring(0, 10)}
            Data        : ${this.data};
        `

    }

    static genesisBlock() {

        return new this(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"), '========', 'f14s7-h45h', []);

    }

    static addBlock(lastBlock, data) {

        const timestamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data)

    }

    //HASHING
    static hash(timestamp, lastHash, data) {

        return SHA256(`${timestamp}${lastHash}${data}`).toString();

    }

    // CHECKING IF BLOCK IS VALID
    static blockHash(block) {

        const { timestamp, lastHash, data } = block;

        return Block.hash( timestamp, lastHash, data );

    }
 
}

module.exports = Block;