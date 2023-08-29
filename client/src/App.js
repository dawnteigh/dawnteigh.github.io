import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
