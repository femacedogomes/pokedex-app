import './App.css';
import Card from './components/card'
import './styles/home.css'

function App() {
  return (
    <div className="App">
      <section className='Header'>
      <h1>Pokedex</h1>
      <p>by Felipe Macêdo Gomes</p>
      </section>
      
      <Card/>
    </div>
  );
}

export default App;
