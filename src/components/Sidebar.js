import { useDispatch, useSelector } from "react-redux";
import "../style.css";
import { useEffect } from "react";
import { fetchSubreddit } from "../features/sidebarSlice";

export const Sidebar = ({onClick}) =>{
    const dispatch = useDispatch();
    const subreddits = useSelector((state) => state.subreddits.subreddits);
    const status = useSelector((state) => state.subreddits.status);
    const error = useSelector((state)=> state.subreddits.error);

    useEffect(()=>{
        dispatch(fetchSubreddit());
    },[dispatch]);

    if(status === "loading"){
        return(
            <aside className="sidebar_container">
            <div className="sidebar">
                <h2>SubReddits</h2>
                <p>Caricamento delle subreddits in corso</p>
            </div>
        </aside>
        );
    }
    
    if(status === "failed"){
        return(
            <aside className="sidebar_container">
            <div className="sidebar">
                <h2>SubReddits</h2>
                <p>Errore: {error}</p>
            </div>
        </aside>
        );

    }

    return(
        <aside className="sidebar_container">
            <div className="sidebar">
            <h2>SubReddits</h2>
            <ul>
                {/*mappo l'array delle subreddit passato da App.js e lo visualizzo in un elenco */}
                {subreddits.map((subreddit) =>{
                    return( 
                    <li key = {subreddit}  onClick={()=> onClick(subreddit)}>
                        {subreddit}                        
                    </li>);
                })}
            </ul>
            </div>
        </aside>
    );
}