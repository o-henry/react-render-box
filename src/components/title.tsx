import * as React from "react";
import Box from "../Box";
import { Colors } from "../utility/color-generator";

type Props = Pick<React.ReactPortal, "children">;

const Title = ({ children }: Props) => {
  return (
    // <div style={{ border: `1px solid ${Colors()}` }}>
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default React.memo(Box(Title));
