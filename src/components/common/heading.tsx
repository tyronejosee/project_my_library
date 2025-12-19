type HeadingProps = {
  title: string;
};

function Heading({ title }: HeadingProps) {
  return (
    <h1 className="font-bold leading-tight tracking-tighter text-4xl lg:leading-[1.1] pb-4">
      {title}
    </h1>
  );
}

export { Heading };
