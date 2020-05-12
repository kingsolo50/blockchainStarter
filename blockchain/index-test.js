const   Block = require('./block');
const   Blockchain = require('./index');
let     bc = new Blockchain();
//
const   myBlock = new Block(Date.now(), 'lo', 'mo', 'n');
const   fooBlock = Block.addBlock(Block.genesisBlock(), 'foo');
const   newBlockData1 = ['solomon'];
const   newBlockData2 = ['kagika'];
const   newBlockData3 = ['kamanu'];
const   sockChain = bc.chain;
//
        try {
 
            console.log('\n 1. Block details ',myBlock.toString());
            //
            console.log('\n 2. Block details inc genesis block ',Block.genesisBlock().toString());
            //
            console.log('\n 3. Add block testing ',fooBlock.toString());
            //
            console.log('\n 4.   Adding a new block', bc.addBlock(newBlockData1));
            console.log('\n 4.1. Adding a new block', bc.addBlock(newBlockData2));    
            console.log('\n 4.2. Adding a new block', bc.addBlock(newBlockData3));    
            //
            // console.log('\n sockChain \n', sockChain);
        
        } catch(err) {

            console.log(err)

        }
