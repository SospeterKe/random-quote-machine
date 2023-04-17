import { useEffect, useState } from 'react';
import './App.css';
import { FaTwitterSquare } from "react-icons/fa";


function App() {
  
const [quote, setQuote] = useState("");
const [author, setAuthor] = useState("");
const [randomColor, setRandomColor] = useState("#ffadad");

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
      setRandomColor(getRandomColor());
    } catch (error) {
      console.error(error);
      //handle error e.g show error message
    }
  };

  //Function to generate random colors
  const getRandomColor = () => {
    const colors = [
      "#FFD700", // Gold
      "#B22222", // Firebrick
      "#8B008B", // Dark Magenta
      "#4682B4", // Steel Blue
      "#800080", // Purple
      "#228B22", // Forest Green
      "#4B0082", // Indigo
      "#8B4513", // Saddle Brown
      "#9932CC", // Dark Orchid
      "#FFA500", // Orange
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="App" style={{backgroundColor: randomColor}}>
      <div className="wrapper" id="quote-box" >
        <h2 id="text" className="text" style={{color: randomColor}}>{quote}</h2>
        <p id="author" className="author" style={{color: randomColor}}>{author}</p>
        <div className="buttons">
        <a  href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} 
            target='blank' 
            id="tweet-quote"
            className='tweet-quote'  
            rel="noopener noreferrer"
            style={{color: randomColor,
                    fontSize: 45
                    }}
            ><FaTwitterSquare /></a>
        <button id="new-quote" className='new-quote' onClick={fetchRandomQuote} style={{backgroundColor: randomColor}}>New Quote</button>
        </div>
      </div>
      <p className="credits"><em>By techsavvysos</em></p>
    </div>
  );
}

export default App;
