import React from "react";
import { FaUsers } from "react-icons/fa6";
import { PiExam } from "react-icons/pi";
import { FaCalendarCheck } from "react-icons/fa6";
import DashCards from "./dashCards/DashCards";

const Dashboard = () => {
  return (
    <div className=" text-white bg-black md:ml-48 h-[100vh] p-10">
      <div className="flex flex-col gap-10">
        <DashCards
          heading={"Total users"}
          numbers={"500"}
          nexPage={"View all users"}
          icons={<FaUsers className="text-3xl" />}
        />
        <DashCards
          heading={"Scheduled exams"}
          numbers={"120"}
          nexPage={"Manage exams"}
          icons={<PiExam className="text-3xl" />}
        />
        <DashCards
          heading={"Total users"}
          numbers={"500"}
          nexPage={"View all users"}
          icons={<FaUsers className="text-3xl" />}
        />
        <DashCards
          heading={"Active vourchers"}
          numbers={"500"}
          nexPage={"View all vouchers"}
          icons={<FaUsers className="text-3xl" />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
