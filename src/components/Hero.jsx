import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import viewIcon from "../assets/view.png";
import kotak from "../assets/kotak.png";
import tambah from "../assets/tambah.png";
import share from "../assets/share.png";

function Hero() {
  const [showBalance, setShowBalance] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const loginObj = localStorage.getItem("loginForm");
    console.log(loginObj);
    const { email } = JSON.parse(loginObj);
    setUserName(email);

    async function getData() {
      const url = "https://dummyjson.com/users/1";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        console.log("Fetched user data:", json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <section className=" px-16 mt-12">
      <div className="flex items-center justify-center">
        <div className="mr-auto">
          <h1 className="text-black text-6xl font-bold">
            Good Morning, {userName}
          </h1>
          <p className="text-black text-2xl mt-3">
            Check all your incoming and outgoing transactions here
          </p>
        </div>
        <Avatar />
      </div>
      <div className=" flex mt-[4.5rem] gap-x-12">
        <div className=" text-2xl bg-[#19918F] p-12 rounded-3xl w-1/5">
          <p>Account No.</p>
          <p className="mt-3 font-bold">100899</p>
        </div>
        <div className="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>
          <span className="flex items-center mt-3 gap-x-2">
            <p className=" text-2xl font-bold">
              {showBalance ? "Rp10.000.000,00" : "Rp ********"}
            </p>
            <img
              src={viewIcon}
              alt="view"
              className="w-4 h-4 object-cover cursor-pointer"
              onClick={() => setShowBalance((prev) => !prev)}
            />

            <div className="relative ml-auto w-12 h-12">
              <img 
                src={kotak}
                alt="kotak"
                className="w-13 h-13 object-cover"
              />
              <img 
                src={tambah}
                alt="tambah"
                className="absolute top-1/4 left-1/4  w-6 h-6 object-cover cursor-pointer"
              />
            </div>

            <div className="relative w-12 h-12">
              <img 
                src={kotak}
                alt="kotak"
                className="w-13 h-13 object-cover"
              />
              <img 
                src={share}
                alt="share"
                className="absolute top-1/4 left-1/4 w-5-1/2 h-6 object-cover cursor-pointer"
              />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
