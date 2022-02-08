import './App.css';
import Title from './components/Title';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import About from './components/About.jsx';

function App() {
  return (
    <div className='App'>
      <Title />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
