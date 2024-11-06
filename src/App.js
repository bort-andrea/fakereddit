import { useDispatch } from 'react-redux';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './features/Post';
import { fetchPost, setSearchTerm, setSubReddit } from './features/postSlice';


function App() {
  //importo dispatch per chiamare le azioni
  const dispatch = useDispatch();

  //funzione per cercare il termine inserito
  const ricerca = (termine) => {
    dispatch(setSearchTerm(termine));
  }

  //funzione per visualizzare la subreddit selezionata
  const selezionaSubReddit = (selezione) =>{
    dispatch(setSubReddit(selezione));
    dispatch(fetchPost(selezione));
  }

  const subredditsElenco = ['reactjs','javascript','webdev','programming'];
  return (
    <div className="App">

      {/*chiamo il componente header con il parametro onSearch in modo che venga
      richiamata la funzione di ricerca*/}
      <Header onSearch={ricerca}/>
      
      {/*chiamo il componente sidebar passandogli l'array di subreddits e la funzione
      di selezione da attivarsi al click di un elemento dell'elenco puntato */}
      <Sidebar subredditsEl={(subredditsElenco)} onClick={selezionaSubReddit}/>

      {/*Richiamo il componente post per visualizzarlo*/}
      <Post/>
    </div>
  );
}

export default App;
