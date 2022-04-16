import InventoryList from "../components/Inventory/InventoryList";
import useItems from "../hooks/items/useItems";

export default function Inventory() {
  const { isLoading, isError, data, error } = useItems();

  if (isLoading) {
    return <div>Loading items</div>;
  }

  if (isError) {
    return <div>An error occurred</div>;
  }

  const items = data?.data;

  return (
    <div className="mx-5 mt-4 w-full">
      <h1 className="text-[22px] font-medium font-ibm mb-5 text-gray-600">
        Inventory
      </h1>
      <InventoryList items={items} />
    </div>
  );
}
