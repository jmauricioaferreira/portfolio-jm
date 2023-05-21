import Image from 'next/image';
import Myself from '../../../../public/memyself.jpg';

export const AboutMe = () => {
  return (
    <section
      id="about me"
      className="flex flex-col md:flex-row justify-between items-center text-gray-400 w-full bg-darkBlue pt-14 pb-20 px-8 md:px-12 lg:px-24 xl:px-32"
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
            engineering, but my passion for technology led me to programming.
          </p>
          <p className="my-2">
            I love creating intuitive and visually appealing interfaces that
            have a positive impact on people's lives.
          </p>
          <p className="my-2">
            In my free time, I enjoy traveling, being in nature, and watching TV
            shows.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 flex justify-center items-center">
        <Image
          src={Myself}
          alt=" myself"
          className="w-4/5 h-auto bg-white shadow-3xl max-w-xs md:max-w-full"
        />
      </div>
    </section>
  );
};
