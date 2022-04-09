import Image from "next/image";
import useItems from "../../hooks/items/useItems";
import emptycart from "../../public/empty-cart.png";

import ProductDropdown from "../UI/ProductDropdown";

export default function ProductDataList({
  // products,
  delModalHandler,
  updateModalHandler,
  items: products,
}) {
  const { isLoading, isError, data, error } = useItems();

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const checkPlural = (items, name) => {
    if (Number(items) === 0 || Number(items) > 1) {
      return `${items} ${name}s`;
    }
    return name;
  };

  if (products.length === 0) {
    return (
      <div className="flex items-center flex-col justify-center">
        <Image src={emptycart} alt="no-data" width={450} height={380} />
        <h1 className="text-2xl font-medium font-ibm mb-2">
          No Products found!
        </h1>
        <p className="text-gray-600">
          Add products using the button on the top-right corner{" "}
        </p>
      </div>
    );
  }
  return (
    <div className="relative overflow-x-auto overflow-y-auto shadow-md rounded-sm w-full grow">
      <table className="w-full text-sm text-left">
        <thead className="text-[14px] text-gray-400 font-ibm uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3 ">
              Type
            </th>
            <th scope="col" className="px-6 py-3 ">
              No. Items
            </th>
            <th scope="col" className="px-6 py-3">
              Market Price
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
                  <p className="capitalize">{product.item.name}</p>
                </div>
              </th>
              <td className="px-6 py-4 capitalize">{product.item.type}</td>
              <td className="px-6 py-4">
                {checkPlural(product.numItems, product.item.unit)}
              </td>
              <td className="px-6 py-4">
                {product.item.marketPrice} per {product.item.unit}
              </td>
              <td className="py-4 mr-10 flex justify-end">
                <ProductDropdown
                  product={product}
                  delModalHandler={delModalHandler}
                  updateModalHandler={updateModalHandler}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
