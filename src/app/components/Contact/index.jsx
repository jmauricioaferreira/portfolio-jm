import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio de e-mail
  };

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
            className="w-full py-2 px-4 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full py-2 mt-2 px-4 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full py-2 mt-2 px-4 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="py-2 mt-4 px-6 bg-green-500 hover:bg-green-600 text-gray-300 rounded-md focus:outline-none"
          >
            Send Email
          </button>
        </form>

        <div className="w-40 mt-8 flex flex-col items-end space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green500 hover:text-green-600 py-2"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green500 hover:text-green-600 py-2"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green500 hover:text-green-600 py-2"
          >
            <FaInstagram className="mr-2" />
            Instagram
          </a>
          <a
            href="mailto:youremail@example.com"
            className="flex items-center text-green500 hover:text-green-600 py-2"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};
