import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TaskBoard from './components/TaskBoard';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kanban" element={<TaskBoard />} />
      </Routes>
    </div>
  );
}

export default App;
