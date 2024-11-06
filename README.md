# fakeReddit

Un'applicazione frontend realizzata con **React** e **Redux Toolkit** che riproduce alcune funzionalità di Reddit, consentendo agli utenti di cercare e visualizzare i post di diverse subreddit. Questo progetto utilizza chiamate asincrone per ottenere i dati dall'API pubblica di Reddit e permette la navigazione tra subreddit con un'interfaccia semplice e intuitiva.

## Funzionalità

- Visualizzazione dei post di una subreddit selezionata.
- Barra di ricerca per filtrare i post per titolo.
- Sidebar per la selezione rapida di subreddit popolari.
- Gestione dello stato globale dell'app con Redux Toolkit.
- Stato di caricamento e gestione degli errori per le chiamate API.

## Tecnologie Utilizzate

- **React**: Libreria per costruire l'interfaccia utente.
- **Redux Toolkit**: Libreria per la gestione dello stato globale e funzioni asincrone.
- **JavaScript**: Linguaggio di programmazione.
- **CSS**: Styling dell'interfaccia.
- **Fetch API**: Per effettuare chiamate HTTP all'API di Reddit.

## Requisiti

- Node.js e npm installati sulla macchina.

## Installazione e Avvio del Progetto

1. **Clona il repository:**

   ```
   git clone https://github.com/tuo-username/reddit-clone.git
   cd reddit-clone
   ```

2. **Installa le dipendenze:**
  ```
  npm install
  ```
3. **Avvia l'applicazione:**
  ```
  npm start
  ```

4. **Apri il browser**
  e vai a http://localhost:3000 per visualizzare l'app.

## Dettagli Implementativi
- Chiamate Asincrone con createAsyncThunk
  Le chiamate all'API di Reddit sono gestite con createAsyncThunk di Redux Toolkit, che permette di definire azioni asincrone facilmente e gestire automaticamente gli stati di   caricamento (pending, fulfilled, rejected). Questo approccio garantisce che l'interfaccia utente mostri correttamente lo stato di caricamento e eventuali errori di rete.

- Filtraggio dei Post
  I post vengono filtrati in base al termine di ricerca inserito dall'utente nella barra di ricerca. Quando viene selezionata una nuova subreddit, il termine di ricerca viene    azzerato per mostrare tutti i post della nuova categoria.

- Personalizzazione
  Puoi personalizzare le subreddit predefinite nel file App.js, modificando l'array subreddits:

  ```
  const subreddits = ['reactjs', 'javascript', 'webdev', 'programming'];
  ```
  
## Possibili Miglioramenti
  - Ottenere le subreddit direttamente con una chiamata all'API
  - Aggiungere una funzionalità per ordinare i post per popolarità o data.
  - Implementare il supporto per l'autenticazione utente e l'interazione con i post (ad es., votare o commentare).
  - Migliorare il design e rendere l'interfaccia più simile a Reddit.

## Contribuire
Contributi e suggerimenti sono benvenuti! 

Per contribuire:
-  Forka il progetto.
-  Crea un branch per la tua funzionalità (git checkout -b feature/AmazingFeature).
-  Commit delle modifiche (git commit -m 'Aggiungi una nuova funzionalità').
-  Esegui un push sul branch (git push origin feature/AmazingFeature).
-  Apri una pull request.

## Contatti
Per ulteriori informazioni, puoi contattarmi tramite bortolotti.andrea93@gmial.com o tramite il mio profilo GitHub.



