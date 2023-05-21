'use client';

import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiReact, DiGit, DiJqueryLogo } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaCogs } from 'react-icons/fa';
import { TbBrandVscode, TbBrandTailwind } from 'react-icons/tb';
import { SiNextdotjs, SiJest } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Icon {
  icon: IconType;
  name: string;
}

export const SkillsAndTools = ({}) => {
  const iconsSkills: Icon[] = [
    {
      name: 'HTML5',
      icon: AiFillHtml5,
    },
    {
      name: 'CSS3',
      icon: DiCss3,
    },
    {
      name: 'JavaScript',
      icon: IoLogoJavascript,
    },

    {
      name: 'React',
      icon: DiReact,
    },
    {
      name: 'NextJs',
      icon: SiNextdotjs,
    },
    {
      name: 'Jest',
      icon: SiJest,
    },

    {
      name: 'Tailwind CSS',
      icon: TbBrandTailwind,
    },
    {
      name: 'Git',
      icon: DiGit,
    },
    {
      name: 'Github',
      icon: AiFillGithub,
    },
    {
      name: 'RESTful APIs',
      icon: FaCogs,
    },
    {
      name: 'jQuery',
      icon: DiJqueryLogo,
    },
    {
      name: 'VS Code',
      icon: TbBrandVscode,
    },
  ];

  const IconWrapper: React.FC<{ icon: IconType; size: number }> = ({
    icon: Icon,
    size,
  }) => {
    return <Icon size={size} />;
  };

  return (
    <div className="w-full">
      <h1 className="text-7xl  font-bold text-green500 opacity-50">
        skills and tools
      </h1>
      <p className="m-10">
        The skills, tools, and technologies I employ to bring products to life
        encompass a diverse range of expertise. From ideation to implementation,
        my toolkit includes:
      </p>

      <div className="flex w-full justify-center mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {iconsSkills.map((skill, key) => (
            <div
              key={key}
              className="h-28 flex flex-col items-center justify-center p-2"
            >
              <IconWrapper icon={skill.icon} size={50} />

              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
