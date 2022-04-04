import { useState } from "react";

import CreateProductModal from "../../components/Products/CreateProductModal";
import ProductsList from "../../components/Products/ProductsList";

function Products({ user }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="font-poppins mx-5 mt-4 w-full">
      <h1 className="text-2xl font-medium font-ibm mb-5 text-gray-600">
        Available Products
      </h1>
      <button className="relative inline-flex items-center justify-center p-0.5 mr-2 mb-7 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={() => setOpenModal(true)}>
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 hidden sm:inline">
          Create product
        </span>
      </button>
      <ProductsList />
      <CreateProductModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
}

export default Products;