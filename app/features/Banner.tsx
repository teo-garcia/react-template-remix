export type BannerProps = {
  title: string;
};

const Banner = (props: BannerProps) => {
  const { title } = props;

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-16 bg-blue-500 transition-colors duration-500 ease-in-out dark:bg-zinc-900">
      <h1 className="text-center text-7xl font-bold text-white dark:text-blue-500 md:w-2/3 md:text-8xl lg:w-1/2 xl:w-auto xl:text-9xl">
        {title}
      </h1>
    </section>
  );
};

export { Banner };
