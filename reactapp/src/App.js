import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/devices/')
      .then(response => {
        console.log(response.data);
        setDevices(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Device List</h1>
        <ul>
          {devices.length > 0 ? (
            devices.map(device => (
              <li key={device.id}>{device.name} - {device.location}</li>
            ))
          ) : (
            <li>No devices found</li>
          )}
        </ul>
      </header>
    </div>
  );
  
}

export default App;
