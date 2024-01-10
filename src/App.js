import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import PasswordRest from "./Components/PasswordReset/PasswordReset";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<PasswordRest/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
