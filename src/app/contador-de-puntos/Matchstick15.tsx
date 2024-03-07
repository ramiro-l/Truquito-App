import Matchstick5 from './Matchstick5';
import { point } from '@/type';

type Props = {
  readonly points: point;
};

export default function Matchstick15({ points }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <Matchstick5 points={points as point} />
      <Matchstick5 points={points > 5 ? ((points - 5) as point) : 0} />
      <Matchstick5 points={points > 10 ? ((points - 10) as point) : 0} />
    </div>
  );
}
