import './style.css';
import onepiece from './assets/onepiece.jpg';
import demonslayer from './assets/demonslayer.jpg';
import jujutsukaisen from './assets/jujutsukaisen.jpg';

function App() {
  return (
    <section>
      <h1>Movie-List: Anime</h1>
      
      <img src={onepiece} alt=" " />
      <h2>ONE PIECE</h2>
      <small>October 20, 2027</small>

       <img src={demonslayer} alt=" " />
      <h2>DEMON SLAYER</h2>
      <small>April 06, 2027</small>

       <img src={jujutsukaisen} alt=" " />
      <h2>JUJUTSU KAISEN</h2>
      <small>October 03, 2027</small>

    </section>
  
 
  )
}

export default App;