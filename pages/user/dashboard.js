import { useSession } from "next-auth/react";
import { useState } from "react";

// functions
import useUserItems from "../../hooks/items/useUserItems";
import useUser from "../../hooks/users/useUser";
import { getItemsByMonth } from "../../utils/chartFunc";

// components
import CropsChart from "../../components/Charts/CropsChart";
import FarmerPriceChart from "../../components/Charts/FarmerPriceChart";
import Card from "../../components/Dashboard/CropInfoCard";
import SelectChartTab from "../../components/Dashboard/SelectChartTab";
import LoadingSpinner from "../../components/LoadingSpinner";
import Head from "next/head";

function Dashboard() {
  const { data: userSession } = useSession();

  // used by the tab component to select a specific chart
  const [selectedChart, setSelectedChart] = useState("crops");

  const id = userSession.user.id;
  const { isLoading, isError, error, data } = useUser(id);

  // gets items data for the specific user
  const {
    isLoading: isItemsLoading,
    isError: isItemsError,
    error: itemsError,
    data: itemsData,
  } = useUserItems(id);

  if (isLoading || isItemsLoading) {
    return <LoadingSpinner />;
  }

  const items = itemsData?.data;

  const userData = data?.data;
  const verificationStatus = userData.isVerified;

  let userName = userData.name;
  userName = userName.split(" ");
  userName = userName[0];

  const filteredItems = getItemsByMonth(items);
  return (
    <div className="w-full mt-5 mx-5">
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1 className="font-ibm text-[25px] font-medium text-gray-700 mb-5">
        Welcome, {userName}
      </h1>
      <div className="flex gap-5 sm:gap-14 mb-8 ">
        <Card items={items} type={"product"} />
        <Card items={items} type={"price"} />
        <Card items={items} status={verificationStatus} type={"status"} />
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
          {selectedChart === "price" && (
            <FarmerPriceChart width={420} items={items} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
