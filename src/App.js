import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Meme from './components/Meme';


function App() {
  
  return (
    <div className="App">
     <Navbar />
     <Meme button='button' />
    </div>
  );
}

export default App;
