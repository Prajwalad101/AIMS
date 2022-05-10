import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDropdown({
  product,
  delModalHandler,
  updateModalHandler,
}) {
  return (
    <Menu as="div" className="fixed inline-block">
      <div className="fixed">
        <Menu.Button>
          <BsThreeDotsVertical
            size={20}
            className="hover:cursor-pointer hover:text-gray-500"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-blue-800' : 'text-gray-700',
                    'pl-3 py-2 text-sm flex items-center gap-6 hover:cursor-pointer'
                  )}
                  onClick={() => updateModalHandler(product)}
                >
                  <AiOutlineEdit size={18} />
                  Edit
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-red-800' : 'text-gray-700',
                    'pl-3 py-2 text-sm flex items-center gap-7 hover:cursor-pointer'
                  )}
                  onClick={() => delModalHandler(product)}
                >
                  <RiDeleteBin4Line size={15} />
                  Delete
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
