import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <p className="text-xs">&copy; 2023 José Mauricio Ferreira</p>
        </div>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/jmauricioaferreira/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-200 py-2 px-2"
          >
            <FaLinkedin className="mr-2" />
          </a>
          <a
            href="https://github.com/jmauricioaferreira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-200 py-2 px-2"
          >
            <FaGithub className="mr-2" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-200 py-2 px-2"
          >
            <FaInstagram className="mr-2" />
          </a>
          <a
            href="mailto:jmauricio.a.ferreira@gmail.com"
            className="flex items-center text-gray-400 hover:text-gray-200 py-2 px-2"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
