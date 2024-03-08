import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

type Props = {
  readonly text: string;
  readonly href: Url;
};

export default function ButtonLink({ text, href }: Props) {
  return (
    <Link href={href}>
      <button className="w-full min-w-[200px] rounded-md border-primary bg-primary px-4 pt-2 uppercase text-secondary active:bg-secondary active:text-primary">
        {text}
      </button>
    </Link>
  );
}
