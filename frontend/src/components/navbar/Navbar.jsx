import React, { useState } from "react";
import logo from "../../assets/photos/logo.png";
import { IoNotificationsCircle } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import profile from "../../assets/icons/profile.png";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className=" bg-[#8585AD]  sticky top-0 right-0">
        <div className=" flex items-center justify-between px-8 py-2">
          <div className=" flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10" />
            {open ? (
              <RxCross1
                className="text-2xl cursor-pointer"
                onClick={() => toggleSidebar(!open)}
              />
            ) : (
              <RxHamburgerMenu
                className="text-2xl cursor-pointer"
                onClick={() => toggleSidebar(!open)}
              />
            )}
          </div>
          <div className="flex items-center gap-3 ">
            <IoNotificationsCircle className="text-3xl cursor-pointer" />
            <Link to="profile">
              <img src={profile} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
