// require('dotenv').config();

const   WebSocket   = require('ws'),
        P2P_PORT    = process.env.P2P_PORT || 5000,
        peers       = process.env.PEERS ? process.env.PEERS.split(',') : [];
        // peers = process.env.PEERS ? (async () => { await getPort() })().split(',') : [];
        // getPort = require('get-port'),    
        // ws:localhost:+peers

        class P2pServer {  
 
            constructor(blockchain) {

                this.blockchain = blockchain;
                this.sockets = [];
            }

            listen() {

                const   server = new WebSocket.Server({ port: P2P_PORT });

                        try {

                            server.on('connection', socket => this.connectSocket(socket));

                            this.connectToPeers();
                            
                            console.log(`P2P_PORT listening on: ${P2P_PORT}`);

                        } catch(err) {

                            console.log(err);
  
                        }
                        
                        
            }
            
            // YOU CAN SEND ALL PEERS A MESSAGE FROM HERE...
            connectToPeers() {
                peers.forEach(peer => {
                    // ws://localhost:peer
                    const socket = new WebSocket(peer);

                    socket.on('open', () => this.connectSocket(socket));
                    
                    console.log('Connection successful...')
                });
            } 

            connectSocket(socket) {
                this.sockets.push(socket);
                console.log('Socket connected ');
                
                // if (P2P_PORT == 5000) {                    
                // }
                // console.log('Socket connected '+socket);
            } 


        }

        module.exports = P2pServer;
