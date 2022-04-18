import { useState } from "react";
import { useSession } from "next-auth/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verificationToastNotify } from "../../utils/toastFunc";

import AddProductModal from "../../components/ProductsData/AddProductModal";
import ProductDataList from "../../components/ProductsData/ProductDataList";
import useProducts from "../../hooks/products/useProducts";
import DeleteItemModal from "../../components/ProductsData/DeleteItemModal";
import useUserItems from "../../hooks/items/useUserItems";
import useUser from "../../hooks/users/useUser";

function Products() {
  const { data: session, status } = useSession();

  const id = session.user.id;
  const {
    isLoading: isUserLoading,
    isError: isUserError,
    error: userError,
    data: userData,
  } = useUser(id);

  const [openModal, setOpenModal] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [delItem, setDelItem] = useState(null);

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateItem, setUpdateItem] = useState(null);

  const { isLoading, isError, data, error } = useProducts();

  const {
    isItemsLoading,
    isItemsError,
    data: itemsData,
    itemsError,
  } = useUserItems(session.user.id);

  if (isLoading || isItemsLoading || isUserLoading) {
    return <div>Loading...</div>;
  }

  if (isError || isItemsError) {
    return <div>Error</div>;
  }

  const user = userData?.data;
  const verificationStatus = user?.isVerified;

  const delModalHandler = (item) => {
    setDelItem(item);
    setOpenDeleteModal(true);
  };

  const updateModalHandler = (item) => {
    setUpdateItem(item);
    setOpenUpdateModal(true);
  };

  const products = data?.data;
  const items = itemsData?.data;

  if (!items) return null;

  return (
    <div className="w-full ml-5 mt-5 font-poppins">
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        bodyClassName="font-poppins text-sm"
      />
      <div className="flex items-start justify-between">
        {items.length !== 0 && (
          <h1 className="text-[22px] font-medium font-ibm mb-5 text-gray-600">
            Available Products
          </h1>
        )}
        <hr />
        <button
          className="relative inline-flex items-center justify-center p-0.5 mr-2 mb-5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br bg-blue-600 hover:bg-blue-500 hover:shadow-md transition-all focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => {
            if (verificationStatus === "not-verified") {
              verificationToastNotify();
              return;
            }
            setOpenModal(true);
          }}
        >
          <span className="relative px-3 py-2 transition-all ease-in duration-75 rounded-md hidden sm:inline">
            Add Products
          </span>
        </button>
      </div>
      <ProductDataList
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
      <DeleteItemModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        product={delItem}
      />
      {/* <UpdateProductModal
        open={openUpdateModal}
        setOpen={setOpenUpdateModal}
        product={updateProduct}
        products={products}
      /> */}
    </div>
  );
}

export default Products;
