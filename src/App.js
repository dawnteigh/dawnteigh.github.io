import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TaskBoard from './components/TaskBoard';
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kanban" element={<TaskBoard />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
