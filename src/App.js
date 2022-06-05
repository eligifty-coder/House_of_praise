import './App.css'

// import Nav from './components/Nav/Navbar';
import Nav from './components/Nav/Navbar';
import About from './components/about/About';
import Connect from './components/connect/Connect';
import Improve from './components/improve/Improve'
import Program from './components/programs/Program'
import Event from './components/events/Event';



function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Connect />
      <Improve />
      <Program />
      <Event/>
    </div>
  );
}

export default App;
