import axios from "axios";
import { useState } from "react";
function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then(res => {
        setQuote(res.data.content);
      })
      .catch(err => {
        <p>{err} </p>;
      });
  };
  return (
    <>
      <button onClick={getQuote}>get quote</button>
      {quote && <p> {quote} </p> }
    </>
  );
}

export default App;
