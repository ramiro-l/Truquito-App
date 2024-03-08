import { point } from '@/type';

type Props = {
  readonly points: point;
};

export default function Matchstick5({ points }: Props) {
  const match = {
    1: points >= 1,
    2: points >= 2,
    3: points >= 3,
    4: points >= 4,
    5: points >= 5,
  };
  return (
    <div className="h-[120px] w-[120px]">
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[1] ? 'opacity-0' : 'opacity-100'}
           ml-[5%] h-auto w-[8rem] transition-all duration-100 ease-in-out 
          `}
      />
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[2] ? 'opacity-0' : 'opacity-100'}
          ml-[50%] mt-[35%] h-auto w-[8rem] rotate-90 transition-all duration-100 ease-in-out 
          `}
      />
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[3] ? 'opacity-0' : 'opacity-100'}
           -ml-[50%] -mt-[12%] h-auto w-[8rem] -rotate-90 transition-all duration-100 ease-in-out
          `}
      />
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[4] ? 'opacity-0' : 'opacity-100'}
          -ml-[5%] mt-[35%] h-auto w-[8rem] rotate-180 transition-all duration-100 ease-in-out
          `}
      />
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[5] ? 'opacity-0' : 'opacity-100'}
          -mt-[58%] h-auto w-[8rem] rotate-[40deg] transition-all duration-100 ease-in-out
          `}
      />
    </div>
  );
}
