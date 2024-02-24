export default function Title({
  title,
  subtitle,
}: {
  title: String;
  subtitle: String;
}) {
  return (
    <>
      <h1 className="text-[22vw] font-bold uppercase">{title}</h1>
      <h4 className="text-[8vw]  font-bold uppercase -mt-8">{subtitle}</h4>
    </>
  );
}
