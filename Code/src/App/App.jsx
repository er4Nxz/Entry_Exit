import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import Dashboard from "../Components/Dashboard/Dashboard";
const App = () => {
  const user = localStorage.getItem("user");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Dashboard"
            element={user ? <Dashboard /> : <Navigate to={"/"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
