import { useEffect, useState } from "react";

const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_URL = "https://cataas.com";

export function App() {
  const [fact, setFact] = useState();
  const [imageURL, setimageURL] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);

        const threeFirstWords = fact.split(" ", 3).join(" ");
        console.log(threeFirstWords);

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        const { url } = data
        setimageURL(url)
      });
  });
}, []);

  return (
    <main>
      <h1>App de gatitoides</h1>

      {fact && <p>{fact}</p>}

      { 
        <img
          src={`${CAT_PREFIX_URL}${imageURL}`}
          alt={`imagen extraida utilizando las 3 primeras palabras de: ${fact}`}
        />
      }
    </main>
  );
}
