import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { uuid } from '@cfworker/uuid' // FIX: uuid

const Home: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');
  // TODO: fix router
//   const navigate = useNavigate();

  const createRoom = () => {
    const newRoomId = "Some randome id"; // FIX get random id here 
    // navigate(`/room/${newRoomId}?name=${encodeURIComponent(name)}`);
  };

  const joinRoom = () => {
    if (roomId) {
    //   navigate(`/room/${roomId}?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="max-w-md w-full px-6 py-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
          Planning Poker
        </h1>
        <p className="text-center mb-8 text-lg">Estimate with style!</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md mb-4 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={createRoom}
          disabled={!name}
          className="w-full px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-md mb-4 hover:from-yellow-500 hover:to-pink-600 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Create Room
        </button>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoomId(e.target.value)}
            className="flex-grow px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={joinRoom}
            disabled={!name || !roomId}
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
