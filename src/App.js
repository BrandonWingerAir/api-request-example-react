import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    Axios.get("https://api.kanye.rest/").then((response) => {
      setQuote("\"" + response.data.quote + "\" - ");
    });
  };

  return (
    <div className='container'>
      <div>
        {quote} Kanye West
        <button onClick={getQuote}>Random Quote</button>
      </div>
    </div>
  );
}

export default App;
