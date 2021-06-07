import * as React from "react";
import { Canvas } from "../components/canvas";
import { Title } from "../components/title";

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
