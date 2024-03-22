const { createServer } = require('http');
const next = require('next');
const { parse } = require('url');
const { Server } = require('socket.io');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    });

    const io = new Server(server);
    io.on('connection', (socket) => {

        console.log('New user ', socket.id);
        // user conected 
        socket.on('playCard', (gameId, playedCard) => {

            socket.join(gameId);

            // send message to room
            io.in(gameId).emit('newPlayer', { playerId: socket.id, card: playedCard, roomId: gameId });
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});