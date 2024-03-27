import { useEffect, useState } from "react";

const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact";
//const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`;

export function App() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <main>
      <h1>App de gatitoides</h1>
      <p>{fact && <p>{fact}</p>}</p>
    </main>
  );
}
