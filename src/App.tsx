import * as React from "react";

import { Page } from "./features/page";
import { Colors } from "./utility/color-generator";

import "./styles.css";

function App() {
  console.log("Entry Point", <App />);

  const [color, setColor] = React.useState<string>();

  const changeColor = () => {
    setColor(Colors());
  };

  return (
    <div className="App">
      <Page color={color as string} />

      <div>
        <button onClick={changeColor}>CHANGE</button>
      </div>
    </div>
  );
}

export default App;
