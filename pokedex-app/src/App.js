import './App.css';
import Home from './pages/home';
import './styles/home.css'

function App() {
  return (
    <div className="App">
      <section className='Header'>
      <h1>Pokedex</h1>
      <p>by Felipe Macêdo Gomes</p>
      </section>
      <Home/>
    </div>
  );
}

export default App;
