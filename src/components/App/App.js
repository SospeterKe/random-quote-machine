import { useState } from 'react';
import './App.css';

function App() {
  
  
  const myQuotes = [
    {
        quote: 'Man Shall Not Live on bread Alone',
        author: 'Jesus'
    },
    {
        quote: 'Wake Up Already!!',
        author: 'Me'
    },
    {
        quote: 'Code everyday sir',
        author: 'The master'
    },
    {
        quote: 'Believe in yourself',
        author: 'You'
    },
    {
      quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
      author: 'Oscar Wilde'
    },
    {
      quote: 'That it will never come again is what makes life so sweet.',
      author: 'Emily Dickinson'
    }

]


const randomQuote = () => {
  return myQuotes[Math.floor(Math.random()* myQuotes.length)];
  
}

const [quote, setQuote] = useState("");

  return (
    <div className="App">
      <div className="wrapper" id="quote-box" >
        <h2 id="text" className="text">{randomQuote().quote}</h2>
        <p id="author" className="author">{randomQuote().author}</p>
        <div className="buttons">
        <a href="https://publish.twitter.com/" target='blank' id="tweet-quote"className='tweet-quote'>twitter icon</a>
        <button id="new-quote" className='new-quote' onClick={() => setQuote(randomQuote)}>New Quote</button>
        </div>
      </div>
      <p className="credits"><em>By techsavvysos</em></p>
    </div>
  );
}

export default App;
