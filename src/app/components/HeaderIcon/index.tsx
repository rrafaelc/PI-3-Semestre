import { HTMLAttributes } from 'react';
import Circle from './Circle';

type HeaderIconProps = HTMLAttributes<HTMLDivElement>;

export default function HeaderIcon(props: HeaderIconProps) {
  return (
    <div
      {...props}
      className="flex flex-col gap-[2px] cursor-pointer ml-6 hover:scale-125 transition-transform duration-300"
    >
      <div className="flex gap-[2px]">
        <Circle />
        <Circle />
        <Circle />
      </div>
      <div className="flex gap-[2px]">
        <Circle />
        <Circle />
        <Circle />
      </div>
      <div className="flex gap-[2px]">
        <Circle />
        <Circle />
        <Circle />
      </div>
    </div>
  );
}
