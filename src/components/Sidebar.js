export const Sidebar = ({subredditsEl, onClick}) =>{
    return(
        <aside>
            <h2>SubReddits</h2>
            <ul>
                {/*mappo l'array delle subreddit passato da App.js e lo visualizzo in un elenco */}
                {subredditsEl.map((subreddit) =>{
                    return( 
                    <li key = {subreddit} onClick = {()=> onClick(subreddit)}>
                        {subreddit}                        
                    </li>);
                })}
            </ul>
        </aside>
    );
}