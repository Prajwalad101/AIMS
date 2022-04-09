import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { addToastNotify } from "../../utils/toastFunc";
import SelectMenu from "./SelectMenu";
import InventoryInput from "./InventoryInput";
import useCreateItem from "../../hooks/items/useCreateItem";

export default function AddProductModal({ open, setOpen, products }) {
  const cancelButtonRef = useRef(null);

  // const [isValid, setIsValid] = useState(null);

  const [item, setItem] = useState(products[0]);
  const [numItems, setNumItems] = useState(0);
  const [unit, setUnit] = useState("Kilogram");

  const mutation = useCreateItem();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const valid = checkIfValid(products, productName);
    // setIsValid(valid);

    // check if the name is valid
    // if (valid === false) return;

    mutation.mutate(
      { item, numItems: Number(numItems), unit },
      {
        onSuccess: () => {
          setOpen(false);
          addToastNotify();
        },
      }
    );
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-ibm leading-6 font-medium text-gray-700"
                      >
                        Add Product
                      </Dialog.Title>

                      <div className="mb-6 mt-5 font-poppins flex flex-col gap-4">
                        {/* Products */}
                        <div>
                          <SelectMenu
                            item={item}
                            setItem={setItem}
                            productData={products}
                          />
                        </div>

                        {/* No of items */}
                        <div>
                          <InventoryInput
                            numItems={numItems}
                            setNumItems={setNumItems}
                            unit={unit}
                            setUnit={setUnit}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Add
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    ref={cancelButtonRef}
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
