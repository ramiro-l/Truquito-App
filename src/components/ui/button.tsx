import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function ButtonLink({
  text,
  href,
}: {
  text: String;
  href: Url;
}) {
  return (
    <Link href={href}>
      <button className="border-2 min-w-[200px] border-primary px-4 pt-2 rounded-md active:bg-primary active:text-secondary">
        {text}
      </button>
    </Link>
  );
}
