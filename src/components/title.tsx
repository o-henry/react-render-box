import * as React from "react";

type Props = { children: React.ReactNode };

function Title({ children }: Props) {
  console.log("call test");

  return <h1>{children}</h1>;
}

export { Title };
