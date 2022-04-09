export default function InventoryInput({ numItems, setNumItems }) {
  const handleNumChange = (e) => {
    setNumItems(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        No. Items
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
        <input
          type="number"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0"
          value={numItems}
          min={1}
          onChange={handleNumChange}
        />
      </div>
    </div>
  );
}
