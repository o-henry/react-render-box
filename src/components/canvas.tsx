type Props = { color: string | undefined };

function Canvas({ color }: Props) {
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

export default Canvas;
