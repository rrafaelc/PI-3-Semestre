interface CircleProps {
  size?: string | number;
  color?: string;
}

export default function Circle({ size, color }: CircleProps) {
  const widthHeight = size ? size : 4;
  const bgColor = color ? color : '#ACACAC';

  return (
    <div
      style={{
        width: widthHeight,
        height: widthHeight,
        backgroundColor: bgColor,
      }}
      className="rounded-full"
    />
  );
}
