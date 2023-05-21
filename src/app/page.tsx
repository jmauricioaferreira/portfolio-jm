'use client';

import Image from 'next/image';
import { Header } from './components/Header';
import { Contact } from './components/Contact';

import Myself from '../../public/memyself.jpg';

import './globals.css';
import { SkillsAndTools } from './components/SkillsAndTools';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center bg-darkNavy  h-full w-full bg-gridPattern bg-contain bg-fixed bg-repeat">
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
        <section
          id="about me"
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 w-full bg-darkBlue pt-14 pb-20 px-8 md:px-12 lg:px-24 xl:px-48"
        >
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-7xl font-bold text-green500 opacity-50">
              about me
            </h1>

            <div className="flex flex-col my-6">
              <p className="my-2">{"I'm José Mauricio."}</p>
              <p className="my-2">
                A full-stack developer with a focus on
                <strong> front-end</strong>. I have a background in civil
                engineering, but my passion for technology led me to
                programming.
              </p>
              <p className="my-2">
                {
                  " I love creating intuitive and visually appealing interfaces that have a positive impact on people's lives."
                }
              </p>
              <p className="my-2">
                In my free time, I enjoy traveling, being in nature, and
                watching TV shows.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={Myself}
              alt=" myself"
              className="h-auto bg-white shadow-3xl max-w-xs md:max-w-full"
            />
          </div>
        </section>
        <SkillsAndTools />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <p>&copy; 2023 José Mauricio Ferreira</p>
          </div>
          <div>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 mx-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 mx-2"
            >
              LinkedIn
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-gray-400 hover:text-gray-200 mx-2"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
