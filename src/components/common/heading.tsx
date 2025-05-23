type Props = {
  title: string;
};

export default function Heading({ title }: Props) {
  return (
    <h1 className="font-bold leading-tight tracking-tighter text-4xl lg:leading-[1.1] pb-4">
      {title}
    </h1>
  );
}
