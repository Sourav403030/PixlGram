import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Verify from "./features/auth/pages/Verify";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="text-white">Welcome to the Main Page</h1>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/verify/:email" element={<Verify/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
