import { useEffect, useState } from 'react';
import './App.css';
import { FaTwitter } from "react-icons/fa";


function App() {
  
const [quote, setQuote] = useState("");
const [author, setAuthor] = useState("");

  //fetch random quote
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch random quote');
      }
      const data = await response.json(); // Parse response in json format
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error(error);
      //handle error e.g show error message
    }
  };
  
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="App">
      <div className="wrapper" id="quote-box" >
        <h2 id="text" className="text">{quote}</h2>
        <p id="author" className="author">{author}</p>
        <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} target='blank' id="tweet-quote"className='tweet-quote'  rel="noopener noreferrer"><FaTwitter /></a>
        <button id="new-quote" className='new-quote' onClick={fetchRandomQuote} >New Quote</button>
        </div>
      </div>
      <p className="credits"><em>By techsavvysos</em></p>
    </div>
  );
}

export default App;
