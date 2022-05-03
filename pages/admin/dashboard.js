import { useState } from "react";

import CropsChart from "../../components/Charts/Admin/CropsChart";
import UsersChart from "../../components/Charts/UsersChart";
import PriceChart from "../../components/Charts/PriceChart";
import Tabs from "../../components/Tabs";
import useUser from "../../hooks/users/useUser";
import { useSession } from "next-auth/react";
import useItems from "../../hooks/items/useItems";
import LoadingSpinner from "../../components/LoadingSpinner";

function Dashboard() {
  const { data: userSession, status } = useSession();

  const id = userSession.user.id;
  const { isLoading, isError, error, data } = useUser(id);
  const {
    isLoading: isItemsLoading,
    isError: isItemsError,
    error: itemsError,
    data: itemsData,
  } = useItems();

  const items = itemsData?.data;

  const [selectedChart, setSelectedChart] = useState("crops");

  if (isLoading || isItemsLoading) {
    return <LoadingSpinner />;
  }

  const userData = data?.data;

  let userName = userData.name;
  userName = userName.split(" ");
  userName = userName[0];

  return (
    <div className="w-full mx-5 mt-5">
      <h1 className="font-ibm text-[25px] font-medium text-gray-700">
        Welcome, {userName}
      </h1>
      <Tabs selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
      <div className="w-[95%]">
        {selectedChart === "crops" && <CropsChart items={items} />}
        {selectedChart === "users" && <UsersChart />}
        {selectedChart === "price" && <PriceChart />}

        {/* {selectedChart === "crops-info" && (
          <div className="flex">
            <CropDetailChart />
            <CropDetailChart />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Dashboard;
