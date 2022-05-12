import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [dogData, setDogData] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogData(data.message);
      });
  }, []);

  return (
    <div>
      <h1>Fetching Dog Data</h1>
      <p>
        {dogData ? (
          <img src={dogData} alt="A Random Dog" />
        ) : (
          <p> Loading...</p>
        )}
      </p>
    </div>
  );
}
export default App;
