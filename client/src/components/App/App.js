import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    const fetchBack = async () => {
      const data = await axios.get('/projects');
      console.log(data.data);
      setProjects(data.data);
    };
    fetchBack();
  }, []);
  console.log(projects);

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
