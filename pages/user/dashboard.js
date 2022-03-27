import { useState } from "react";

import CropsChart from "../../components/Charts/CropsChart";
import UsersChart from "../../components/Charts/UsersChart";
import PriceChart from "../../components/Charts/PriceChart";
import Tabs from "../../components/Tabs";
import useUser from "../../hooks/users/useUser";

function Dashboard({ userSession }) {
  const id = userSession.current.id;
  const { isLoading, isError, error, data } = useUser(id);

  const [selectedChart, setSelectedChart] = useState("users");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const userData = data?.data;
  const verificationStatus = userData.isVerified;

  let userName = userData.name;
  userName = userName.split(" ");
  userName = userName[0];

  console.log(selectedChart);

  return (
    <div className="w-full mx-5 mt-5">
      <div className="flex items-center gap-10">
        <h1 className="font-ibm text-[25px] font-medium">
          Welcome, {userName}
        </h1>
        <div className="flex gap-3 items-center font-poppins">
          {/* <p className="text-gray-500">Status: </p> */}
          <span className="bg-blue-100 text-blue-800 text-sm mr-2 px-3 py-1 rounded capitalize">
            {verificationStatus}
          </span>
        </div>
      </div>
      <Tabs selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
      <div className="w-[95%]">
        {selectedChart === "crops" && <CropsChart />}
        {selectedChart === "users" && <UsersChart />}
        {selectedChart === "price" && <PriceChart />}
      </div>
    </div>
  );
}

export default Dashboard;
