import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faArrowUp,
  faUserAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-white rounded-xl h-14 md:min-h-screen w-full md:w-1/5">
      <ul className="h-full w-4/5 flex justify-evenly md:justify-start md:flex-col">
        <li className="flex items-center group cursor-pointer md:mt-5">
          <FontAwesomeIcon
            icon={faHome}
            className="h-8 w-8 md:h-5 md:w-5 text-darkColor group-hover:text-primary"
          />
          <p className="hidden md:ml-2.5 md:inline-block md:text-lg text-darkColor group-hover:text-primary">
            Home
          </p>
        </li>
        <li className="flex items-center group cursor-pointer md:mt-14">
          <FontAwesomeIcon
            icon={faArrowUp}
            className="h-8 w-8 md:h-5 md:w-5 text-darkColor group-hover:text-primary"
          />
          <p className="hidden md:ml-2.5 md:inline-block md:text-lg text-darkColor group-hover:text-primary">
            Transfer
          </p>
        </li>
        <li className="flex items-center group cursor-pointer md:mt-14">
          <FontAwesomeIcon
            icon={faPlus}
            className="h-8 w-8 md:h-5 md:w-5 text-darkColor group-hover:text-primary"
          />
          <p className="hidden md:ml-2.5 md:inline-block md:text-lg text-darkColor group-hover:text-primary">
            Top Up
          </p>
        </li>
        <li className="flex items-center group cursor-pointer md:mt-14">
          <FontAwesomeIcon
            icon={faUserAlt}
            className="h-8 w-8 md:h-5 md:w-5 text-darkColor group-hover:text-primary"
          />
          <p className="hidden md:ml-2.5 md:inline-block md:text-lg text-darkColor group-hover:text-primary">
            Profile
          </p>
        </li>
        <li className="flex items-center group cursor-pointer md:mt-auto md:mb-8">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="h-8 w-8 md:h-5 md:w-5 text-darkColor group-hover:text-primary"
          />
          <p className="hidden md:ml-2.5 md:inline-block md:text-lg text-darkColor group-hover:text-primary">
            Log Out
          </p>
        </li>
      </ul>
    </nav>
  );
}
