import React from "react";
import { Link, NavLink } from "react-router-dom";
import dash from "../../assets/icons/dash.png";
import exam from "../../assets/icons/exam.png";
import profile from "../../assets/icons/profile.png";
import results from "../../assets/icons/results.png";
import setting from "../../assets/icons/setting.png";
import user from "../../assets/icons/user.png";
import voucher from "../../assets/icons/voucher.png";
import transaction from "../../assets/icons/transaction.png";
import support from "../../assets/icons/support.png";

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <>
      <div className=" ">
        {open ? (
          <div
            className={`fixed justify-center  h-full bg-gray-800 text-white w-48 p-4 transform ${
              open ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className=" flex flex-col gap-10 mt-12">
              <div className="flex items-center  gap-4">
                <NavLink to="/dashboard">
                  <img src={dash} alt="" className="rounded-md " />
                </NavLink>
                <NavLink to="/dashboard">
                  <span>Dashboard</span>
                </NavLink>
              </div>
              <div className="flex items-center  gap-4">
                <NavLink to="/user">
                  <img src={user} alt="user" className="rounded-md w-8" />
                </NavLink>
                <NavLink to="/user">
                  <span>Users</span>
                </NavLink>
              </div>
              <div className="flex items-center  gap-4">
                <NavLink to="/exams">
                  <img src={exam} alt="exams" className="rounded-md w-8" />
                </NavLink>

                <NavLink to="/exams">
                  <span>Exams</span>
                </NavLink>
              </div>
              <div className="flex items-center  gap-4">
                <NavLink to="/results">
                  <img src={results} alt="" className="rounded-md w-10" />
                </NavLink>
                <NavLink to="/results">
                  <span>Exam Results</span>
                </NavLink>
              </div>
              <div className="flex items-center  gap-4">
                <NavLink to="/voucher">
                  <img src={voucher} alt="voucher" className="rounded-md w-8" />
                </NavLink>
                <NavLink to="/voucher">
                  <span>Vouchers</span>
                </NavLink>
              </div>
              <div className="flex items-center  gap-4">
                <NavLink to="/transaction">
                  <img
                    src={transaction}
                    alt="transaction"
                    className="rounded-md w-8"
                  />
                </NavLink>
                <NavLink to="/transaction">
                  <span>Transaction</span>
                </NavLink>
              </div>
              <div className="flex items-center  gap-4">
                <NavLink to="/support">
                  <img src={support} alt="support" className="rounded-md w-8" />
                </NavLink>
                <NavLink to="/support">
                  <span>Support Requests</span>
                </NavLink>
              </div>
              <div className="flex items-center  gap-4">
                <NavLink to="setting">
                  <img src={setting} alt="setting" className="rounded-md w-8" />
                </NavLink>
                <NavLink to="setting">
                  <span>Settings</span>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Sidebar;
