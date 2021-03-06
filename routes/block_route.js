//localhost:8080/api/
"use strict";
// require("dotenv").config();

const   router = require("express").Router(),        
        Blockchain = require('../blockchain/index'),
        P2pServer = require('../p2pServer'),
        bc = new Blockchain(),
        p2pServer = new P2pServer(bc);
 
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
        
        p2pServer.listen();

        // WORK TO BE DONe!


module.exports = router;
