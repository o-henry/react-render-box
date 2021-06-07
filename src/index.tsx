import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

console.log("@@@@@@@", render(<App />, rootElement));

render(<App />, rootElement);
