import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPost , setSearchTerm} from "./postSlice";

export const Post = () => {
    //mi creo le variabili necessarie
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const subreddit = useSelector((state) => state.posts.subreddit);
    const searchTerm = useSelector((state) => state.posts.searchTerm);
    const status = useSelector((state) => state.posts.state);
    const error = useSelector((state) => state.posts.error);

    //utilizzo useEffect per aggiornare il contenuto ogni volta
    //che la subreddit cambia richiedendolo all'api
    useEffect(()=>{
        dispatch(fetchPost(subreddit));
    }, [subreddit,dispatch]);

    //creo l'array con solamente i post ricercati filtrando i
    //risultati della fetch richiesta
    const filteredPosts = posts.filter((post) => {
        post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    //gestisco la schermata in base agli stati della richiesta
    if (status == 'loading'){
        return <div>Caricamento ... </div>;
    }
    if (status == 'failed'){
        return <div>Errore: {error}</div>;
    }
    return(
        <div>
            {filteredPosts.map((post) =>{
                <div key={post.id}>
                    <p>{post.selftext}</p>
                </div>
            })}
        </div>
    );
}