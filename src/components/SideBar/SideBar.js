import React from "react";
import { SideBarItems } from "../../common/SidebarData";
import { Link } from "react-router-dom";
import { Facebook, twitter, Linkedin } from "../../images";
import "./sideBar.scss";

const SideBar = () => {
  return (
    <div className="home-container">
      <ul>
        {SideBarItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="item">
              {item.icon}
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="contact-container">
        <h3>CONTACT US</h3>
        <div>
          <img src={Facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={Linkedin} alt="linkedin" />
        </div>
        <p>Enjoy! Now to see your channels and recommandations!</p>
      </div>
    </div>
  );
};

export default SideBar;
