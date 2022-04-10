import { useSession } from "next-auth/react";
import { useState } from "react";
import CropDetailChart from "../../components/Charts/CropDetailChart";
import CropsChart from "../../components/Charts/CropsChart";
import PriceChart from "../../components/Charts/PriceChart";
import UsersChart from "../../components/Charts/UsersChart";
import Card from "../../components/Dashboard/CropInfoCard";
import SelectChartTab from "../../components/Dashboard/SelectChartTab";
import VerifiedCard from "../../components/Dashboard/VerifiedCard";
import Tabs from "../../components/Tabs";
import useUserItems from "../../hooks/items/useUserItems";
import useUser from "../../hooks/users/useUser";
import { getItemsByMonth } from "../../utils/chartFunc";

function Dashboard() {
  const { data: userSession, status } = useSession();

  const [selectedChart, setSelectedChart] = useState("crops");

  const id = userSession.user.id;
  const { isLoading, isError, error, data } = useUser(id);

  const {
    isLoading: isItemsLoading,
    isError: isItemsError,
    error: itemsError,
    data: itemsData,
  } = useUserItems(id);

  if (isLoading || isItemsLoading) {
    return <div>Loading...</div>;
  }

  const items = itemsData?.data;

  const userData = data?.data;
  const verificationStatus = userData.isVerified;

  let userName = userData.name;
  userName = userName.split(" ");
  userName = userName[0];

  const filteredItems = getItemsByMonth(items);
  return (
    <div className="w-full mt-5 ml-5">
      <h1 className="font-ibm text-[25px] font-medium text-gray-700 mb-5">
        Welcome, {userName}
      </h1>
      <div className="flex gap-14 mb-8">
        <Card numCrops={items.length} />
        <VerifiedCard status={verificationStatus} />
      </div>

      <div className="w-full">
        <SelectChartTab
          selectedChart={selectedChart}
          setSelectedChart={setSelectedChart}
        />
        <div>
          {selectedChart === "crops" && (
            <CropsChart width={420} cropData={filteredItems} />
          )}
          {selectedChart === "price" && <PriceChart width={420} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
