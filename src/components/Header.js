import '../style.css';
const { useState } = require("react")

export const Header = ({onSearch}) => {
    //creo le variabili per gestire il termine inserito
    const [searchTerm, setSearchTerm] = useState("");

    //funzione chiamata al click del tasto "cerca" e esegue la funzione
    //che verrà definita in App.js
    const handleSearch = () =>{
        onSearch(searchTerm);
        setSearchTerm("");
    };
    
    return(
        <header>
            <div className="search-bar">
                <h1>fakeReddit</h1>
                {/*input con evento per aggiornare la variabile del termine*/}
                <div className='input_field'>
                <input 
                    type = "search" 
                    value = {searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Cerca nei titoli"/>
                {/*bottone con chiamata alla funzione*/}
                <button onClick={handleSearch}>Cerca</button>
                </div>
            </div>
        </header>
    );
}