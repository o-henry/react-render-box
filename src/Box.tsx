import * as React from "react";
import { Colors } from "./utility/color-generator";

const Box = <T extends object>(Component: React.ComponentType<T>) => (
  props: T
) => (
  <div style={{ border: `3px solid ${Colors()}` }}>
    <Component {...(props as T)} />
  </div>
);

export default Box;
