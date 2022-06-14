import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState(null);
  useEffect(()=>{
    const fetchBack = async ()=>{
      const data = await axios.get('http://localhost:5050/');
      console.log(data);
      setMessage(data.data);
    };
    fetchBack();
  });


  return (
    <div className="App">
    <h1>{message}</h1>
    </div>
  );
}

export default App;
