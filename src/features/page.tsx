import * as React from "react";
import Canvas from "../components/canvas";
import Title from "../components/title";
import MemoTitle from "../components/memo-title";

type Props = { color: string };

function Page({ color }: Props) {
  return (
    <>
      <div style={{ margin: "10px 0" }}>
        <Title>⬅ The border color changes when rendering occurs.</Title>
      </div>

      <div style={{ margin: "10px 0" }}>
        <MemoTitle>⬅ Prevent rendering</MemoTitle>
      </div>

      <div style={{ margin: "10px 0" }}>
        <Canvas color={color} />
      </div>
    </>
  );
}

export default Page;
