import { useState } from "react";
import useProducts from "../../hooks/products/useProducts";

import CreateProductModal from "../../components/Products/CreateProductModal";
import DeleteProductModal from "../../components/Products/DeleteProductModal";
import ProductsList from "../../components/Products/ProductsList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDropdown from "../../components/UI/ProductDropdown";
import UpdateProductModal from "../../components/Products/UpdateProductModal";

function Products() {
  const [openModal, setOpenModal] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [delProduct, setDelProduct] = useState(null);

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(null);

  const { isLoading, isError, data, error } = useProducts();

  if (isLoading) return <div>Loading products</div>;
  if (isError) return <div>Error: {error}</div>;

  const products = data?.data;

  const delModalHandler = (product) => {
    setDelProduct(product);
    setOpenDeleteModal(true);
  };

  const updateModalHandler = (product) => {
    setUpdateProduct(product);
    setOpenUpdateModal(true);
  };

  return (
    <div className="font-poppins mx-5 mt-4 w-full">
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        bodyClassName="font-poppins text-sm"
      />
      <div className="flex items-start justify-between">
        {products.length !== 0 && (
          <h1 className="text-[22px] font-medium font-ibm mb-5 text-gray-600">
            Available Products
          </h1>
        )}

        <hr />
        <button
          className="relative inline-flex items-center justify-center p-0.5 mr-2 mb-7 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br bg-blue-600 hover:bg-blue-500 hover:shadow-md transition-all focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => setOpenModal(true)}
        >
          <span className="relative px-3 py-2 transition-all ease-in duration-75 rounded-md hidden sm:inline">
            Create Product
          </span>
        </button>
      </div>
      <ProductsList
        products={products}
        delModalHandler={delModalHandler}
        updateModalHandler={updateModalHandler}
      />
      <CreateProductModal
        open={openModal}
        setOpen={setOpenModal}
        products={products}
      />
      <DeleteProductModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        product={delProduct}
      />
      <UpdateProductModal
        open={openUpdateModal}
        setOpen={setOpenUpdateModal}
        product={updateProduct}
      />
    </div>
  );
}

export default Products;
