import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPost} from "./postSlice";
import "../style.css";

export const Post = () => {
    //mi creo le variabili necessarie
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const subreddit = useSelector((state) => state.posts.subreddit);
    const searchTerm = useSelector((state) => state.posts.searchTerm);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    //utilizzo useEffect per aggiornare il contenuto ogni volta
    //che la subreddit cambia richiedendolo all'api
    useEffect(()=>{
        dispatch(fetchPost(subreddit));
    }, [subreddit,dispatch]);
    
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //gestisco la schermata in base agli stati della richiesta
    if (status === 'loading'){
        return (
            <>
            <div>Caricamento dei post da {subreddit} </div>
            </>
        );
    }
    
    if (status === 'failed'){
        return (
            <>
            <div>Errore: {error}</div>
            </>
        );
    }

    
    return(
        <div className="posts-section">
            <h3>Post from - {subreddit}</h3>
            {filteredPosts.map((post) => (
                <div key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.selftext}</p>
                </div>                
            ))
            }
        </div>
    );
    
    /*
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
    );*/
    
}
