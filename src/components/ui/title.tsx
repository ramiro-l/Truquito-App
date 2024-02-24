export default function Title({
  title,
  subtitle,
}: {
  title: String;
  subtitle: String;
}) {
  return (
    <>
      <h1 className="text-[5.5rem] font-bold uppercase">{title}</h1>
      <h4 className="text-[2.21rem] font-bold uppercase -mt-8">{subtitle}</h4>
    </>
  );
}
