import './App.css'
import SmallNav from './SmallNavBar/NavItems';
import Nav from './Nav/Navbar';
import About from './about/About';
import Connect from './connect/Connect';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Connect/>
    </div>
  );
}

export default App;
