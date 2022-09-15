import React from "react";
import Cookies from "js-cookie";
import { LogoLight, profile } from "../../images";
import { FaMoon } from "react-icons/fa";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <nav className="nav-container">
        <img src={LogoLight} alt="logo" className="logoImage" />
        <div className="navbar-logout-container">
          <FaMoon />
          <img src={profile} alt="profile" />
          <button type="button" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
