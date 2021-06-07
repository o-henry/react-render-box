import { render } from "react-dom";
import ReactDOMServer from "react-dom/server";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

ReactDOMServer.renderToStaticMarkup(<App />);
