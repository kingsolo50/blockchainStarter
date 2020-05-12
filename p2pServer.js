require('dotenv').config();

const   WebSocket = require('ws'),
        getPort = require('get-port'),    
        P2P_PORT = process.env.P2P_PORT,
        peers = process.env.PEERS ? (async () => { await getPort() })().split(',') : [];
        // peers = process.env.PEERS ? process.env.PEERS.split(',') : [];
        // ws:localhost:+peers

        class P2pServer {

            constructor(blockchain) {

                this.blockchain = blockchain;
                this.sockets = [];
            }

            listen() {

                const   server = new WebSocket.Server({ port: process.env.P2P_PORT });
                        server.on('connection', socket => this.connectSocket(socket));
                        console.log(`Listening on Peer 2 Peer connections on: ${P2P_PORT}`);
            }

            connectSocket(socket) {
                this.sockets.push(socket);
                console.log('Socket connected');
            }
        }

        module.exports = P2pServer;
