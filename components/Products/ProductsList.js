export default function ProductsList({ products }) {
  const modalHandler = () => {};
  return (
    <div className="relative overflow-x-auto shadow-md rounded-sm w-full grow">
      <table className="w-full text-sm text-left">
        <thead className="text-[14px] text-gray-400 font-ibm uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product
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
          {products.map((product) => (
            <tr
              className="border-b hover:bg-gray-50 text-[15px]"
              key={product._id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                <div className="flex gap-2 items-center">
                  <p className="capitalize">{product.name}</p>
                </div>
              </th>
              <td className="px-6 py-4 capitalize">{product.type}</td>
              <td className="px-6 py-4">{product.province}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
