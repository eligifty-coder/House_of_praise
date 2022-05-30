import './App.css'

// import Nav from './components/Nav/Navbar';
import Nav from './components/Nav/Navbar';
import About from './components/about/About';
import Connect from './components/connect/Connect';
// import Improve from './components/improve'
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
