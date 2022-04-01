/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserDropdown({ user }) {
  const { data: session, status } = useSession();

  const firstName = session.user.name.split(" ")[0];
  const image = session.user.image;

  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="w-full">
          <div className="flex w-full gap-5 text-white items-center hover:bg-gray-700 py-2 px-3 rounded-sm hover:cursor-pointer">
            <Image
              src={image}
              alt={"user-profile"}
              width={27}
              height={27}
              className="rounded-full"
            />
            <p>Profile</p>
          </div>
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 text-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a href="#" className="text-gray-300 block px-4 py-2 text-sm">
                Logged in as {user}
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="#" className="text-gray-300 block px-4 py-2 text-sm">
                {session.user.email}
              </a>
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-600" : "",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={signOut}
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
