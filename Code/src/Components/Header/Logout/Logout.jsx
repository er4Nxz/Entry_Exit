import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsOpen, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
    navigate("/");
    window.location.reload();
  };
  return (
    <button
      onClick={() => {
        handleLogout();
        setIsOpen(false);
      }}
      className="flex items-center text-lg gap-2 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 hover:text-red-600"
      title="خروج از حساب"
    >
      خروج
      <FaSignOutAlt />
    </button>
  );
};

export default Logout;
