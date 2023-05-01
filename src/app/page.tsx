import Image from "next/image";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";

import Myself from "../../public/memyself.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center bg-darkNavy  h-full w-full bg-gridPattern bg-contain bg-fixed bg-repeat ">
        <section className="flex flex-col text-gray300 justify-center items-start w-10/12	 min-h-screen max-w-screen-xl px-28">
          <div>
            <p className="font-4 text-green500 animate-fade-in-down">
              Hello, my name is
            </p>
            <h1 className="mt-5 mb-1 text-7xl font-bold animate-fade-in-down">
              José Mauricio.
            </h1>
            <div className="opacity-50">
              <h1 className=" text-6xl font-bold text-green500  animate-fade-in-down">
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
          className="flex justify-between  items-center text-gray-400 w-full bg-darkBlue pt-14  align-middle min-h-screen px-32"
        >
          <div className="w-1/2">
            <h1 className="text-7xl font-bold text-green500 opacity-50">
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
                {`I love creating intuitive and visually appealing interfaces that
            have a positive impact on people's lives.`}
              </p>
              <p className="my-2">
                In my free time, I enjoy traveling, being in nature, and
                watching TV shows.
              </p>
            </div>
          </div>
          <div className="flex flex-1 justify-end items-center ">
            <Image
              src={Myself}
              alt=" myself"
              className=" h-auto bg-white shadow-3xl w-9/12"
            />
          </div>
        </section>
        <section
          id="skills and tools"
          className="flex justify-between items-center text-gray300 w-full mt-8  align-middle min-h-screen px-32"
        >
          <div>
            <h1 className=" text-7xl font-bold text-green500 opacity-50">
              skills and tools
            </h1>
            <div className="flex flex-col w-2/3"></div>
          </div>
        </section>

        <section
          id="contact"
          className="flex justify-between items-center text-gray300 w-full mt-8  bg-darkBlue  align-middle min-h-screen px-32"
        >
          <Contact />
        </section>
      </main>
    </>
  );
}
