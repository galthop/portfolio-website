import Title from './components/Title';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import About from './components/About.jsx';

function App() {
  return (
    <div className='bg-gradient-to-tr from-blue-300 to-slate-400'>
      <Title />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
