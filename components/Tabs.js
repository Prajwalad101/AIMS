function Tabs({ selectedChart, setSelectedChart }) {
  return (
    <div className="mt-5 mb-5">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
        <li className="mr-2" onClick={() => setSelectedChart("crops")}>
          <a
            href="#"
            aria-current="page"
            className={`inline-block p-4 rounded-t-lg active ${
              selectedChart === "crops"
                ? "bg-gray-100 text-blue-600 font-semibold"
                : "hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            Inventory
          </a>
        </li>
        <li className="mr-2" onClick={() => setSelectedChart("price")}>
          <a
            href="#"
            className={`inline-block p-4 rounded-t-lg ${
              selectedChart === "price"
                ? "bg-gray-100 text-blue-600 font-semibold"
                : "hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            Price
          </a>
        </li>
        <li className="mr-2" onClick={() => setSelectedChart("users")}>
          <a
            href="#"
            className={`inline-block p-4 rounded-t-lg ${
              selectedChart === "users"
                ? "bg-gray-100 text-blue-600 font-semibold"
                : "hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            Users
          </a>
        </li>
        {/* <li className="mr-2" onClick={() => setSelectedChart("crops-info")}>
          <a
            href="#"
            className={`inline-block p-4 rounded-t-lg ${
              selectedChart === "crops-info"
                ? "bg-gray-100 text-blue-600 font-semibold"
                : "hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            Crops Info
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Tabs;
