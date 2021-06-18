import Box from "../Box";
type Props = { color: string | undefined };

function Canvas({ color }: Props) {
  // console.log("Color", <Canvas color={color} />);

  return (
    <div
      style={{
        backgroundColor: color,
        width: "96px",
        height: "96px",
        margin: "30px auto"
      }}
    />
  );
}

export default Box(Canvas);
