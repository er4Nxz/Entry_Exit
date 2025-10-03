import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Table"
            element={username ? <Table /> : <Navigate to={"/"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
