import { FC, PropsWithChildren } from "react";

interface digitCardProps extends PropsWithChildren {
  digit: number | string;
}

const DigitCard: FC<digitCardProps> = ({ digit }) => {
  return (
    <div className="h-[200px] w-[100px] flex items-center justify-center bg-red-400 rounded">
      <h1 className="text-7xl font-bold text-slate-200">{digit}</h1>
    </div>
  );
};

export default DigitCard;
