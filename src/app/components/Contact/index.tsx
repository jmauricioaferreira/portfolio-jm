export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-gray-300 w-full mt-8 align-middle min-h-screen px-8 md:px-32"
    >
      <h1 className="w-full text-left text-4xl md:text-7xl font-bold text-green500 opacity-50">
        contact me
      </h1>
      <div className="flex flex-col w-full justify-around sm:flex-row">
        <form className="w-full max-w-lg mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full py-2 px-4 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full py-2 mt-2 px-4 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green500"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full py-2 mt-2 px-4 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green500"
          ></textarea>
          <button
            type="submit"
            className="py-2 mt-4 px-6 bg-green500 hover:bg-green-700 text-gray-800 rounded-md focus:outline-none"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};
