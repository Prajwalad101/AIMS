import { useState } from "react";
import useProducts from "../../hooks/products/useProducts";

import CreateProductModal from "../../components/Products/CreateProductModal";
import DeleteProductModal from "../../components/Products/DeleteProductModal";
import ProductsList from "../../components/Products/ProductsList";
import UpdateProductModal from "../../components/Products/UpdateProductModal";
import LoadingSpinner from "../../components/LoadingSpinner";

function Products() {
  const [openModal, setOpenModal] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [delProduct, setDelProduct] = useState(null);

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(null);

  const { isLoading, isError, data, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;
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
      <div className="flex flex-col sm:flex-row sm:items-start justify-between">
        {products.length !== 0 && (
          <h1 className="text-[22px] font-medium font-ibm mb-5 text-gray-600">
            Available Products
          </h1>
        )}
        <button
          type="button"
          className="text-white w-[150px] font-normal bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 focus:outline-none sm:mb-2"
          onClick={() => setOpenModal(true)}
        >
          Create Product
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
        products={products}
      />
    </div>
  );
}

export default Products;
