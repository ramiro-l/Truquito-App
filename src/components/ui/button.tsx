import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

type Props = {
  readonly text: string;
  readonly href: Url;
};

export default function ButtonLink({ text, href }: Props) {
  return (
    <Link href={href}>
      <button className="text-secondary w-full uppercase bg-primary min-w-[200px] border-primary px-4 pt-2 rounded-md active:bg-secondary active:text-primary">
        {text}
      </button>
    </Link>
  );
}
