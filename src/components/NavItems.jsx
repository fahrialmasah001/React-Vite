import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useTheme } from "../hooks/useTheme";
import matahari from "../assets/matahari2.png";

function NavItems({ menu }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { toggleTheme, theme } = useTheme();
  const themeColor = theme === "green" ? "#19918F" : "#007BFF";
  useEffect(() => {
    if (activeTab === "Sign Out") {
      localStorage.removeItem("Login");
      navigate("/");
    }
  });

  return (
    <ul className="flex gap-x-8 text-black items-center">
      {menu.map((item) => {
        return (
          <NavLink
            key={item.title}
            to={item.link}
            style={({ isActive }) => {
              return isActive ? { color: themeColor } : { color: "black" };
            }}
            onClick={() => setActiveTab(item.title)}
          >
            {item.title}
          </NavLink>
        );
      })}
      <button
        onClick={toggleTheme}
        className="bg-[#19918F] text-white rounded-full px-2 py-2 hover:scale-105 transition-all"
        style={{ backgroundColor: themeColor }}
      >
        <img src={matahari} alt="matahari" className="w-6 h-6" />
      </button>
    </ul>
  );
}

export default NavItems;