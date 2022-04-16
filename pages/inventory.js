import { useState } from "react";
import { getFormattedDate } from "../utils/utility";

// components
import { CSVLink } from "react-csv";
import InventoryList from "../components/Inventory/InventoryList";
import useItems from "../hooks/items/useItems";
import InventoryModal from "../components/Inventory/InventoryModal";

export default function Inventory() {
  const [openModal, setOpenModal] = useState(false);
  const { isLoading, isError, data, error } = useItems();

  if (isLoading) {
    return <div>Loading items</div>;
  }

  if (isError) {
    return <div>An error occurred</div>;
  }

  const items = data?.data;

  if (!items) return null;

  const headers = [
    { label: "Product", key: "product" },
    { label: "Owner", key: "owner" },
    { label: "Volume", key: "volume" },
    { label: "MarketPrice", key: "marketPrice" },
    { label: "TotalPrice", key: "totalPrice" },
    { label: "CreatedAt", key: "createdAt" },
  ];

  const csvData = items.map((item) => {
    const totalPrice = item.item.marketPrice * item.numItems;
    const date = getFormattedDate(item.createdAt);
    return {
      product: item.item.name,
      owner: item.addedBy.name,
      volume: item.numItems,
      marketPrice: item.item.marketPrice,
      totalPrice: totalPrice,
      createdAt: date,
    };
  });

  return (
    <div className="mx-5 mt-4 w-full font-poppins">
      <InventoryModal open={openModal} setOpen={setOpenModal} />
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-[22px] font-medium font-ibm mb-5 text-gray-600">
          Inventory
        </h1>
        <div>
          <CSVLink data={csvData} headers={headers} filename={"inventory.csv"}>
            <button
              type="button"
              className="text-white font-normal bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
            >
              Download (CSV)
            </button>
          </CSVLink>
          <button
            type="button"
            className="text-white font-normal bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
          >
            Download (PDF)
          </button>
        </div>
      </div>
      <InventoryList items={items} setOpen={setOpenModal} />
    </div>
  );
}
