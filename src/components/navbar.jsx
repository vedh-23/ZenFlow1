import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Logo from "./logo";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Logo src="#" name="ZenFlo" />
      
      <Link to="/signup">SignUp</Link>
      
      {!cookies.access_token ? (
      
        <Link to="/login">Login</Link>
        
      ) : (
        <>
        <Account>

        </Account>
        <button onClick={logout}> Logout </button>
        </>
      )}
      <Link to="/aboutus">About Us</Link>
      <Link to="/contactus">Contact Us</Link>
      
    </div>
  );
};