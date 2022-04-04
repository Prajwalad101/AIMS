export default function ProductsList() {
  const modalHandler = () => {};
  return (
    <div className="relative overflow-x-auto shadow-md rounded-sm w-full grow">
      <table className="w-full text-sm text-left">
        <thead className="text-[14px] text-gray-400 font-ibm uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Crop
            </th>
            <th scope="col" className="px-6 py-3 ">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Province
            </th>

            <th scope="col" className="px-6 py-3 text-gray-500">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b hover:bg-gray-50 text-[15px]">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap "
            >
              <div className="flex gap-2 items-center">
                <p>Wheat</p>
              </div>
            </th>
            <td className="px-6 py-4 ">Vegetable</td>
            <td className="px-6 py-4">Province 2</td>
            {/* <td className="px-6 py-4">{user.district}</td> */}
            {/* <td className="px-6 py-4">{user.municipality}</td> */}
            {/* <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={() => modalHandler(user)}
              >
                Details
              </a>
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
