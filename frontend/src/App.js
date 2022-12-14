import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    getNames();
  }, [])
  
  const getNames = async () => {
    const response = await axios.get('/names')
    setUsername(response.data)
    console.log(response)
  }

  return (
    <div>
      <h1>My name is {username}</h1>
    </div>
  );
}

export default App;
