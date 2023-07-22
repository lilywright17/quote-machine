import { useState } from "react";
import quotes from "./assets/quotes.json";
import './App.css'
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomColor = (): string => {
  const colours = [
    "#c26ef0",
    "#f25ec3",
    "#3cc6e8",
    "#3ce85e",
    "#f59d40",
  ];
  return colours[Math.floor(Math.random() * colours.length)];
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
};

  return (
    <div className="background" style={{ backgroundColor: randomColor }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomColor }}>
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
          <h2 id="text">{quote.quote}</h2>
          <FaQuoteRight size="30" style={{ marginLeft: "10px"}} />
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='} id="tweet-quote"
          style={{
            marginRight: "10px",
            backgroundColor: randomColor,
          }}
          >
            <FaTwitter color="white" />
          </a>
          <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor }}>
            Change quote
          </button>
      </div>
    </div>
  </div>
  );    
}

export default App
