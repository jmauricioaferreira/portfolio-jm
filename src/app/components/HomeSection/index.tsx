export const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col text-gray-300 justify-center items-start w-10/12 min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24 xl:px-48"
    >
      <div>
        <p className="font-4 text-green500 animate-fade-in-down">
          Hello, my name is
        </p>
        <h1 className="mt-5 mb-1 text-5xl md:text-7xl font-bold animate-fade-in-down">
          José Mauricio.
        </h1>
        <div className="opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold text-green500 animate-fade-in-down">
            I build stuff for the web.
          </h1>
        </div>

        <p className="max-w-3xl my-5 animate-fade-in-down">
          Front-end developer from Rio de Janeiro, Brazil.
        </p>
      </div>
    </section>
  );
};
