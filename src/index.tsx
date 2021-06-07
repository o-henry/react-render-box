import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root") as any;

render(<App />, rootElement);

// import { matchAll, Utils } from "eact-fiber-traverse";
// const rootFiberNode = Utils.getRootFiberNodeFromDOM(rootElement) as any;
// const someFiberNode = matchAll(rootFiberNode, "Page Canvas")[0]; // <- returns FiberNode for first usage of 'SomeComponentName'
// console.log(someFiberNode);
