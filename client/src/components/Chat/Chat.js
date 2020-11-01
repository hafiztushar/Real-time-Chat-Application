import React, {useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const endpoint = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        
        setName(name);
        setRoom(room);
        //set connectionto server
        socket = io(endpoint);

        socket.emit('join', { name, room });

    }, [endpoint, location.search]);
    
    return (
        <h1> Chat </h1>
    );
}
export default Chat;