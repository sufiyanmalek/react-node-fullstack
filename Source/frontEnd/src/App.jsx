import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminHomePage from "./pages/AdminHomePage";
import DevoteeLoginPage from "./pages/DevoteeLoginPage";
import VerifyOtpPage from "./pages/VerifyOtpPage";
import UserHomePage from "./pages/UserHomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLoginPage />}></Route>
          <Route path="/admin/home" element={<AdminHomePage />}></Route>
          <Route path="/devotee/login" element={<DevoteeLoginPage />}></Route>
          <Route path="/verify" element={<VerifyOtpPage />}></Route>
          <Route path="/user/home" element={<UserHomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
