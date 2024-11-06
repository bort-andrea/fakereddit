export const Sidebar = ({subreddits, onSelect}) =>{
    return(
        <aside>
            <h2>SubReddits</h2>
            <ul>
                {/*mappo l'array delle subreddit passato da App.js e lo visualizzo in un elenco */}
                {subreddits.map((subreddit) =>{
                    return( 
                    <li key = {subreddit} onClick = {()=>onSelect(subreddit)}>
                        {subreddit}                        
                    </li>);
                })}
            </ul>
        </aside>
    );
}