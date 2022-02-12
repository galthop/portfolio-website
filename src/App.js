import Title from './components/Title';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import About from './components/About.jsx';

function App() {
  return (
    <div class='bg-gradient-to-r from-cyan-500 to-blue-500 w-[100vw] h-[100vh]'>
      <Title />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
//linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))
