import React from "react";
import { NavLink } from "react-router-dom";
import dash from "../../assets/icons/dash.png";
import exam from "../../assets/icons/exam.png";
import profile from "../../assets/icons/profile.png";
import results from "../../assets/icons/results.png";
import setting from "../../assets/icons/setting.png";
import user from "../../assets/icons/user.png";
import voucher from "../../assets/icons/voucher.png";
import transaction from "../../assets/icons/transaction.png";
import support from "../../assets/icons/support.png";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={`fixed z-40 h-full bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          sm:w-48 w-64 md:translate-x-0`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col gap-10 mt-12">
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/">
              <img src={dash} alt="" className="rounded-md" />
            </NavLink>
            <NavLink to="/">
              <span className="">Dashboard</span>
            </NavLink>
          </div>

          {/* User */}
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/user">
              <img src={user} alt="user" className="rounded-md w-8" />
            </NavLink>
            <NavLink to="/user">
              <span className="">Users</span>
            </NavLink>
          </div>

          {/* Other Links */}
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/exams">
              <img src={exam} alt="exams" className="rounded-md w-8" />
            </NavLink>
            <NavLink to="/exams">
              <span className="">Exams</span>
            </NavLink>
          </div>
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/results">
              <img src={results} alt="results" className="rounded-md w-10" />
            </NavLink>
            <NavLink to="/results">
              <span className="">Exam Results</span>
            </NavLink>
          </div>

          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/voucher">
              <img src={voucher} alt="voucher" className="rounded-md w-8" />
            </NavLink>
            <NavLink to="/voucher">
              <span className="">Vouchers</span>
            </NavLink>
          </div>

          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/transaction">
              <img
                src={transaction}
                alt="transaction"
                className="rounded-md w-8"
              />
            </NavLink>
            <NavLink to="/transaction">
              <span className="">Transaction</span>
            </NavLink>
          </div>

          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/support">
              <img src={support} alt="support" className="rounded-md w-8" />
            </NavLink>
            <NavLink to="/support">
              <span className="">Support Requests</span>
            </NavLink>
          </div>

          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="setting">
              <img src={setting} alt="setting" className="rounded-md w-8" />
            </NavLink>
            <NavLink to="setting">
              <span className="">Settings</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Overlay for mobile to close sidebar */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
