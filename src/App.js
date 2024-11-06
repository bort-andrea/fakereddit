import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {

  //funzione per cercare il termine inserito
  const ricerca = (termine) => {}

  //funzione per visualizzare la subreddit selezionata
  const selezionaSubReddit = (selezione) =>{}

  const subreddits = ['reactjs','javascript','webdev','programming'];
  return (
    <div className="App">

      {/*chiamo il componente header con il parametro onSearch in modo che venga
      richiamata la funzione di ricerca*/}
      <Header onSearch={ricerca}/>
      
      {/*chiamo il componente sidebar passandogli l'array di subreddits e la funzione
      di selezione da attivarsi al click di un elemento dell'elenco puntato */}
      <Sidebar subreddits={(subreddits)} onClick={selezionaSubReddit}/>
    </div>
  );
}

export default App;
