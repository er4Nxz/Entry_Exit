import { useState, useEffect } from "react";
import { CiLogin } from "react-icons/ci";
import { TbTable } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Logout from "./Logout/Logout";

const Header = () => {
  const [user, setUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {user && (
            <div className="text-gray-800 text-lg font-medium bg-gray-100 px-4 py-2 rounded-lg mb-2">
              {user}
            </div>
          )}
          <button
            className="sm:hidden text-2xl p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="منوی همبرگری"
          >
            <GiHamburgerMenu />
          </button>
          <div className="hidden sm:flex space-x-8 rtl:space-x-reverse">
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                `flex items-center text-lg gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                }`
              }
              style={{ textDecoration: "none" }}
            >
              داشبورد
              <TbTable />
            </NavLink>
            {user ? (
              <Logout setUser={setUser} setIsOpen={setIsOpen} />
            ) : (
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center text-lg gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                ورود
                <CiLogin />
              </NavLink>
            )}
          </div>
        </div>
        <div className={`sm:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
          <div className="flex flex-col gap-3">
            <NavLink
              to="/Table"
              className={({ isActive }) =>
                `flex items-center text-lg gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                }`
              }
              style={{ textDecoration: "none" }}
              onClick={() => setIsOpen(false)}
            >
              داشبورد
              <TbTable />
            </NavLink>
            {user ? (
              <Logout setUser={setUser} setIsOpen={setIsOpen} />
            ) : (
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center text-lg gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                  }`
                }
                style={{ textDecoration: "none" }}
                onClick={() => setIsOpen(false)}
              >
                ورود
                <CiLogin />
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
