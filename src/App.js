import { useDispatch } from 'react-redux';
import './style.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './features/Post';
import { fetchPost, setSearchTerm, setSubReddit } from './features/postSlice';
import { useEffect } from 'react';


function App() {
  //importo dispatch per chiamare le azioni
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost("reactjs"));
  },[dispatch]);
  
  //funzione per cercare il termine inserito
  const ricerca = (termine) => {
    dispatch(setSearchTerm(termine));
  }

  //funzione per visualizzare la subreddit selezionata
  const selezionaSubReddit = (selezione) =>{
    dispatch(setSubReddit(selezione));
    dispatch(fetchPost(selezione));
  }

  return (
    <body>
    <div className="container">
      
      {/*chiamo il componente header con il parametro onSearch in modo che venga
      richiamata la funzione di ricerca*/}
      <Header onSearch={ricerca}/>
      <div className="corpo">
      {/*chiamo il componente sidebar passandogli l'array di subreddits e la funzione
      di selezione da attivarsi al click di un elemento dell'elenco puntato */}
      <Sidebar onClick={selezionaSubReddit}/>

      {/*Richiamo il componente post per visualizzarlo*/}
      <Post/>
      </div>
    </div>
    </body>
  );
}

export default App;
