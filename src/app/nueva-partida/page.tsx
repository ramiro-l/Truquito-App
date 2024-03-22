'use client';

import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Socket } from "socket.io-client";
import Game from './Game';

export default function Home() {

    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {

        socketRef.current = io('http://localhost:3000'); // only for test!!!

        socketRef.current.on('connect', () => {
            console.log(`connected to socket ${socketRef.current?.id}`);
        });



        socketRef.current?.on('newPlayer', (data) => {
            console.log(`player: ${data.playerId} in room: ${data.roomId} play card ${data.card}`);

        })

        // clean component
        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
    }, []);
    ;

    const sendMessage = (player_id: number, id: number) => {
        console.log(`player ${player_id} juega carta ${id}`)

        socketRef.current?.emit('playCard', 5, id, (response: any) => {
            console.log(response)
        });
    };

    return (
        <div>
            <Game sendMessage={sendMessage} />
        </div>
    );
}