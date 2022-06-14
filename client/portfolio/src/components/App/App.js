import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    const fetchBack = async () => {
      const data = await axios.get('http://localhost:5050/');
      setProjects(data.data);
    };
    fetchBack();
  }, []);


  return (
    <div className="App">
    {
      projects.map((project)=> (
        <li>{project.title}</li>
      ))
    }
    </div>
  );
}

export default App;
