import { Dialog } from "@headlessui/react";
import React from "react";
import { CSVLink } from "react-csv";
import { checkPlural, getFormattedDate } from "../../utils/utility";

const ModalDescription = React.forwardRef((props, ref) => {
  if (!ref.current) return null;
  const { item, handlePrint, open, setOpen } = props;

  const { cancelButtonRef, componentRef } = ref.current;

  return (
    <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Inventory Details
            </Dialog.Title>
            <div
              className="bg-white overflow-hidden sm:rounded-lg mt-3"
              ref={componentRef}
            >
              <div className=" border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Item</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                      {item.item.name}
                    </dd>
                  </div>
                  <div className="bg-white px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Added By
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {item.addedBy.name}{" "}
                      <span className="text-gray-500">
                        on {getFormattedDate(item.createdAt)}
                      </span>
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {item.addedBy.email}
                    </dd>
                  </div>
                  <div className="bg-white px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Volume
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {item.numItems}{" "}
                      {checkPlural(item.item.unit, item.numItems)}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Market Price
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Rs. {item.item.marketPrice}
                      <span className="text-gray-500">
                        {" "}
                        per {item.item.unit}
                      </span>
                    </dd>
                  </div>
                  <div className="bg-white px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Total Price
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Rs. {item.item.marketPrice * item.numItems}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handlePrint}
        >
          Download (PDF)
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setOpen(false)}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </div>
  );
});

ModalDescription.displayName = "ModalDescription";

export default ModalDescription;
