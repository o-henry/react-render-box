import * as React from "react";
import { Colors } from "../utility/color-generator";

type Props = Pick<React.ReactPortal, "children">;

function Title({ children }: Props) {
  // console.log("title", <Title>{children}</Title>);

  return (
    <div
      style={{
        border: "1px solid",
        borderColor: Colors(),
        width: "96px",
        margin: "5px auto"
      }}
    >
      <h1>{children}</h1>
    </div>
  );
}

export { Title };
