type Props = {
  readonly title: string;
  readonly subtitle: string;
};

export default function Title({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-center text-[22vw] min-[350px]:text-[5.5rem] font-bold uppercase">
        {title}
      </h1>
      <h4 className="text-center text-[8vw] min-[350px]:text-[2.2rem]  font-bold uppercase -mt-8 min-w-[285px]">
        {subtitle}
      </h4>
    </div>
  );
}
