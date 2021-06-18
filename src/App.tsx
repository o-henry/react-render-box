import * as React from "react";

import { Page } from "./features/page";
import { Colors } from "./utility/color-generator";
import Button from "./components/button";

import "./styles.css";

function App() {
  // console.log("Entry Point", <App />);

  const [color, setColor] = React.useState<string>();

  const changeColor = () => {
    setColor(Colors());
  };

  return (
    <div className="App">
      <Page color={color as string} />

      <div>
        <Button onClick={changeColor}>CHANGE</Button>
      </div>
    </div>
  );
}

export default App;
