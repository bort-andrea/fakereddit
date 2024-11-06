import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPost} from "./postSlice";

export const Post = () => {
    //mi creo le variabili necessarie
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const subreddit = useSelector((state) => state.posts.subreddit);
    const searchTerm = useSelector((state) => state.posts.searchTerm);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);
    let filteredPosts = [];

    //utilizzo useEffect per aggiornare il contenuto ogni volta
    //che la subreddit cambia richiedendolo all'api
    useEffect(()=>{
            dispatch(fetchPost(subreddit));
    }, [subreddit,dispatch]);
    
    //creo l'array con solamente i post ricercati filtrando i
    //risultati della fetch richiesta
    if(searchTerm){
        filteredPosts = posts.filter((post) => {
            post.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
    
    //gestisco la schermata in base agli stati della richiesta
    if (status == 'loading'){
        return (
            <>
            <div>Caricamento dei post da {subreddit} </div>
            </>
        );
    }
    
    if (status == 'failed'){
        return (
            <>
            <div>Errore: {error}</div>
            </>
        );
    }
    
    if(filteredPosts.length > 0){
        return(
            <>
            <h3>Post from {posts[0].subreddit} - result of: {searchTerm}</h3>
            <div>
                {filteredPosts.map((post) =>{
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.selftext}</p>
                    </div>
                })}
            </div>
            </>
        );
    }
    
    return(
        <>
        <h3>Post from {subreddit}</h3>
        <div>
            {posts.map((post ,index) =>{
                return(
                    <div key={index}>
                        <h4>{post.title}</h4>
                        <p>{post.selftext}</p>
                    </div>
                );
            })}
        </div>
        </>
    );
    
}