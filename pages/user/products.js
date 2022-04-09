import { useState } from "react";
import { useSession } from "next-auth/react";
import AddProductModal from "../../components/ProductsData/AddProductModal";

import UserProductsList from "../../components/ProductsData/ProductDataList";
import useProducts from "../../hooks/products/useProducts";
import useItem from "../../hooks/items/useItem";

function Products() {
  const { data: session, status } = useSession();
  const [openModal, setOpenModal] = useState(false);

  const { isLoading, isError, data, error } = useProducts();

  const {
    isItemsLoading,
    isItemsError,
    data: itemsData,
    itemsError,
  } = useItem(session.user.id);

  if (isLoading || isItemsLoading) {
    return <div>Loading products....</div>;
  }

  if (isError || isItemsError) {
    return <div>Error</div>;
  }

  const delModalHandler = () => {};

  const updateModalHandler = () => {};

  const products = data?.data;
  const items = itemsData?.data;

  return (
    <div className="w-full ml-5 mt-5">
      <div className="flex items-start justify-between font-poppins">
        <p className="text-xl font-ibm text-gray-700 font-medium">Items</p>
        <button
          className="relative inline-flex items-center justify-center p-0.5 mr-2 mb-5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br bg-blue-600 hover:bg-blue-500 hover:shadow-md transition-all focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => setOpenModal(true)}
        >
          <span className="relative px-3 py-2 transition-all ease-in duration-75 rounded-md hidden sm:inline">
            Add Products
          </span>
        </button>
      </div>
      <UserProductsList
        products={products}
        delModalHandler={delModalHandler}
        updateModalHandler={updateModalHandler}
        items={items}
      />
      <AddProductModal
        open={openModal}
        setOpen={setOpenModal}
        products={products}
        items={items}
      />
    </div>
  );
}

export default Products;
