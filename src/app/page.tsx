'use client';

import { Header } from './components/Header';
import { Contact } from './components/Contact';
import { SkillsAndTools } from './components/SkillsAndTools';
import { AboutMe } from './components/AboutMe';
import './globals.css';
import { HomeSection } from './components/HomeSection';
import { PersonalProjects } from './components/PersonalProjects';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center bg-darkNavy  h-full w-full bg-gridPattern bg-contain bg-fixed bg-repeat">
        <HomeSection />
        <AboutMe />
        <SkillsAndTools />
        <PersonalProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
