import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  const logout = () => {
    axios
      .post("http://localhost:3000/api/v1/logout")
      .then((response) => {
        console.log(response)
        navigate('/login')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center p-6  bg-[#b41938] text-lg text-[#ece6e6]">
      <div className="flex items-center gap-2">
        <div className="text-3xl">SMIT |</div>
        <div className="text-sm">
          <h1>Saylani</h1>
          <h1> MicroFinance App</h1>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <a href="/loandetail">Loans</a>
        </div>
        <div>
          {/* <a href="/"> */}
            <button onClick={logout}>Logout</button>
          {/* </a> */}
        </div>
        <div>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
