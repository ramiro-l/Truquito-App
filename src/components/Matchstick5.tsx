import Image from "next/image";
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
      <Image
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        width={120}
        height={15}
        className={`${!match[1] ? "opacity-0" : "opacity-100"}
           ml-[5%] h-auto w-[8rem] transition-all ease-in-out duration-100
          `}
      />
      <Image
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        width={120}
        height={15}
        className={`${!match[2] ? "opacity-0" : "opacity-100"}
          rotate-90 ml-[50%] mt-[35%] h-auto w-[8rem] transition-all ease-in-out duration-100 
          `}
      />
      <Image
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        width={120}
        height={15}
        className={`${!match[3] ? "opacity-0" : "opacity-100"}
           -rotate-90 -ml-[50%] -mt-[12%] h-auto w-[8rem] transition-all ease-in-out duration-100
          `}
      />
      <Image
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        width={120}
        height={15}
        className={`${!match[4] ? "opacity-0" : "opacity-100"}
          rotate-180 mt-[35%] -ml-[5%] h-auto w-[8rem] transition-all ease-in-out duration-100
          `}
      />
      <Image
        src="/assets/matchstick.svg"
        alt="fósforo de puntos"
        width={120}
        height={15}
        className={`${!match[5] ? "opacity-0" : "opacity-100"}
          rotate-[40deg] -mt-[58%] h-auto w-[8rem] transition-all ease-in-out duration-100
          `}
      />
    </div>
  );
}
