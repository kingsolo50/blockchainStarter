//localhost:8080/api/
"use strict";
// require("dotenv").config();

const   router = require("express").Router(),        
        Blockchain = require('../blockchain/index'),
        bc = new Blockchain();
        // P2pServer = require('../app/p2p-server'),
        // p2pServer = new P2pServer(bc);
 
        //
        router.get('/', (req, res, next) => {
            res.json({
                success: true,
                msg: 'Sock-chain',
                data: bc.chain
            }); 
        });

        //
        router.post('/addBlock', (req, res, next) => {
            
            const data = req.body.data;

            bc.addBlock(data);

            // console.log(`New block added: ${block.toString()}`)
            
            // p2pServer.syncChains();

            //* Redirect back to block route for response
            res.redirect('/api'); 

        });
        
        // p2pServer.listen();


module.exports = router;
