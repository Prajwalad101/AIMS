import Image from "next/image";

import { checkPlural } from "../../utils/utility";

export default function InventoryList({ items, setOpen, setActiveItem }) {
  return (
    <div className="relative overflow-x-auto overflow-y-auto shadow-md rounded-sm w-full grow">
      <table className="w-full text-sm text-left">
        <thead className="text-[14px] text-gray-400 font-ibm uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3 ">
              Owner
            </th>
            <th scope="col" className="px-6 py-3">
              Volume
            </th>
            <th scope="col" className="px-6 py-3">
              Market Price
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3 text-gray-500">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr
              className="border-b hover:bg-gray-50 text-[15px] hover:cursor-pointer"
              key={item._id}
              onClick={() => {
                setActiveItem(item);
                setOpen(true);
              }}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                <div className="flex gap-2 items-center">
                  <p className="capitalize">{item.item.name}</p>
                </div>
              </th>
              <td className="px-6 py-4 capitalize">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.addedBy.image}
                    width={28}
                    height={28}
                    alt="user-profile"
                    className="rounded-full"
                  />
                  {item.addedBy.name}
                </div>
              </td>
              <td className="px-6 py-4">
                {item.numItems} {checkPlural(item.item.unit, item.numItems)}
              </td>
              <td className="px-6 py-4 text-gray-500">
                Rs. {item.item.marketPrice} per {item.item.unit}
              </td>
              <td className="px-6 py-4">
                Rs. {item.item.marketPrice * item.numItems}
              </td>

              <td className="py-4 mr-10 flex justify-end"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
