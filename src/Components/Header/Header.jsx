import { useState, useEffect } from "react";
import { CiLogin } from "react-icons/ci";
import { TbDashboard } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8 rtl:space-x-reverse">
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
              <CiLogin />
              ورود
            </NavLink>
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
            >
              <TbDashboard />
              داشبورد
            </NavLink>
          </div>
          {username && (
            <div className="flex items-center gap-4">
              <div className="text-gray-800 text-lg font-medium bg-gray-100 px-4 py-2 rounded-lg">
                {username}
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
                title="خروج از حساب"
              >
                خروج
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
