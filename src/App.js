import { React } from 'react';
import './App.css';
import Bio from './components/bio/Bio';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';

const App = () => {
  return (
    <div className="App">
      <Bio />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
