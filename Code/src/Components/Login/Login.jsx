import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaSignInAlt } from "react-icons/fa";

export const User = [
  "بهرام احمدی",
  "حسن احمدی",
  "عرفان احمدی",
  "حمیده حاجی محمدی",
  "مریم حاجی محمدی",
];
const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const clickHandler = () => {
    if (user) {
      localStorage.setItem("user", user);
      navigate("/Dashboard");
      window.location.reload();
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <FaUser className="mx-auto text-4xl sm:text-6xl text-indigo-600 mb-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            ورود به سیستم
          </h1>
        </div>
        <div className="space-y-6">
          <div>
            <select
              name="User"
              id="User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white cursor-pointer"
            >
              <option value="" hidden>
                نام خود را انتخاب کنید
              </option>
              {User.map((user, index) => (
                <option style={{padding:"10px"}} value={user} key={index}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={clickHandler}
            disabled={!user}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FaSignInAlt />
            ورود به جدول
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
