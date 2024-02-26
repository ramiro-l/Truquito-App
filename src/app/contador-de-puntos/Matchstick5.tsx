import { point } from "@/type";

export default function Matchstick5({ points }: { points: point }) {
  const match = {
    1: points >= 1,
    2: points >= 2,
    3: points >= 3,
    4: points >= 4,
    5: points >= 5,
  };
  return (
    <div className="w-[120px] h-[120px]">
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[1] ? "opacity-0" : "opacity-100"}
           ml-[5%] h-auto w-[8rem] transition-all ease-in-out duration-100 
          `}
      />
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[2] ? "opacity-0" : "opacity-100"}
          rotate-90 ml-[50%] mt-[35%] h-auto w-[8rem] transition-all ease-in-out duration-100 
          `}
      />
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[3] ? "opacity-0" : "opacity-100"}
           -rotate-90 -ml-[50%] -mt-[12%] h-auto w-[8rem] transition-all ease-in-out duration-100
          `}
      />
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[4] ? "opacity-0" : "opacity-100"}
          rotate-180 mt-[35%] -ml-[5%] h-auto w-[8rem] transition-all ease-in-out duration-100
          `}
      />
      <img
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        className={`${!match[5] ? "opacity-0" : "opacity-100"}
          rotate-[40deg] -mt-[58%] h-auto w-[8rem] transition-all ease-in-out duration-100
          `}
      />
    </div>
  );
}
