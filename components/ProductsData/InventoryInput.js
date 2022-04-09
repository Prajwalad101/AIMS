export default function InventoryInput({
  numItems,
  setNumItems,
  unit,
  setUnit,
}) {
  const checkPlural = (name) => {
    if (numItems == 0 || numItems > 1) {
      return name + "s";
    } else {
      return name;
    }
  };

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
          onChange={handleNumChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label className="sr-only">Unit</label>
          <select
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="kilogram">{checkPlural("Kilogram")}</option>
            <option value="gram">{checkPlural("Gram")}</option>
            <option value="litre">{checkPlural("Litre")}</option>
            <option value="piece">{checkPlural("Piece")}</option>
          </select>
        </div>
      </div>
    </div>
  );
}
