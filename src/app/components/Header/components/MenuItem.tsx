import { Link } from "react-scroll";

interface MenuNamesProps {
  name: string;
}

export const MenuItem: React.FC<MenuNamesProps> = ({ name }) => {
  return (
    <li>
      <Link
        to={name}
        smooth={true}
        duration={500}
        href="#"
        className="group text-gray300 transition duration-300"
      >
        {name}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-green500"></span>
      </Link>
    </li>
  );
};
