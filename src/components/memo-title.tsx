import * as React from "react";
import Box from "visual-box";

type Props = Pick<React.ReactPortal, "children">;

const MemoTitle = ({ children }: Props) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default React.memo(Box(MemoTitle));
