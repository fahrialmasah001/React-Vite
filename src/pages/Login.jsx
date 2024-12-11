import { Link } from "react-router";
import loginBg from "../assets/GambarLogin.png";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../components/ActionButton";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [error] = useState({});

  const navigate = useNavigate();

  useEffect(()=> {
    const email = localStorage.getItem("loginForm");
    if (email) {
      navigate("/dashboard"); 
    }
  }, []
  
  )
  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    localStorage.setItem("loginForm", JSON.stringify(loginForm));
    e.preventDefault();
    if (error.message) {
      alert(error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <section className="flex w-full h-screen bg-white">
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div>
          <img className="w-[290px] mx-auto" src={logo} alt="logo" />
          <form className="flex flex-col mt-24 gap-y-5">
            <input
              className="text-black bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px]"
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="text-black bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px]"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
            <ActionButton
              disabled={!loginForm.email || !loginForm.password}
              onClick={handleSubmit}
            >
              Login
            </ActionButton>
          </form>
          <div className="w-full mt-4 text-black">
            Belum punya akun?{" "}
            <Link to="/register" className="text-[#19918F] text-left">
              Daftar di sini
            </Link>
          </div>
        </div>
      </div>
      <img
        src={loginBg}
        alt="login background"
        className="w-1/2 object-cover"
      />
    </section>
  );
}

export default Login;