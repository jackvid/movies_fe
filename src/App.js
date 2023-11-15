import React, {useState} from "react";
import Movies from "./containers/Movies";

const App = () => {
  const [seed, setSeed] = useState(1);

  const handleReset = () => {
    setSeed(Math.random());
  }

  return (
      <Movies
          key={seed}
          onReset={handleReset}
      />
  );
}

export default App;
