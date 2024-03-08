type Props = {
  readonly title: string;
  readonly subtitle: string;
};

export default function Title({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-center text-[22vw] font-bold uppercase min-[350px]:text-[5.5rem]">
        {title}
      </h1>
      <h4 className="-mt-8 min-w-[285px] text-center  text-[8vw] font-bold uppercase min-[350px]:text-[2.2rem]">
        {subtitle}
      </h4>
    </div>
  );
}
