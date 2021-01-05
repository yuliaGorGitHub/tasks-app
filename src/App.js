
import './App.css';
import TasksList from './components/TasksList';
import React from 'react';
import background from "./images/BEUGBRe.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <TasksList/>
    </div>
  );
}

export default App;
