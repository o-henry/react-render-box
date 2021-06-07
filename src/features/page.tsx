import * as React from "react";
import { Canvas, Title } from "../components";

type Props = { color: string };

function Page({ color }: Props) {
  console.log("Page", <Page color={color} />);

  return (
    <>
      <Title>Hello</Title>
      <Canvas color={color} />
    </>
  );
}

export { Page };
