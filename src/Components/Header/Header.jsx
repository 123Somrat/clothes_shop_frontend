import  { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { SiNike } from "react-icons/si";
import "../../../src/App.css"
export default function Header() {
  const [theme, setTheme] = useState('light');



  const lighAndDarkMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <div>
      <header className="dark:bg-gray-200 dark:text-black-100">
        <div className="container flex justify-between h-8 mx-auto">
          <Link
            to={"/"}
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <SiNike className="w-6 h-6 ml-6" />
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link
                to={"/"}
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-xs"
              >
                <span className="mr-4">search Store</span> |
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/"}
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-xs"
              >
                <span className="mr-4">Help</span> |
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/register"}
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-xs"
              >
                Register
              </Link>
            </li>

            <label
            htmlFor="Toggle1"
              className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span className="relative">
                <input id="Toggle1" type="checkbox" className="hidden peer" onClick={lighAndDarkMode}/>
                <div className="w-10 h-6 rounded-full shadow-inner dark:bg-white peer-checked:dark:bg-gray-300"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
              </span>
            </label>
          </ul>
          <button className="flex justify-end p-2 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
