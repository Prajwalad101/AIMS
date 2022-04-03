import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";

export const farmerSidebarData = [
  {
    title: "Dashboard",
    id: "1",
    url: "/user/dashboard",
    icon: <MdOutlineSpaceDashboard size={20} />,
  },
  {
    title: "Personal Info",
    id: "2",
    url: "/personal-info",
    icon: <BsFillPersonLinesFill size={20} />,
  },
  {
    title: "Inbox",
    id: "3",
    url: "/inbox",
    icon: <RiInboxUnarchiveLine size={20} />,
  },
  {
    title: "Products",
    id: "4",
    url: "/user/products",
    icon: <BiFoodMenu size={20} />,
  },
];

export const adminSidebarData = [
  {
    title: "Dashboard",
    id: "1",
    url: "/admin/dashboard",
    icon: <MdOutlineSpaceDashboard size={20} />,
  },
  {
    title: "Applications",
    id: "2",
    url: "/users",
    icon: <BsFillPersonLinesFill size={20} />,
  },
  {
    title: "Inbox",
    id: "3",
    url: "/inbox",
    icon: <RiInboxUnarchiveLine size={20} />,
  },
  {
    title: "Products",
    id: "4",
    url: "/admin/products",
    icon: <BiFoodMenu size={20} />,
  },
];

export const changeSidebarState = (url, setSelectedOption) => {
  if (url.includes("dashboard")) {
    setSelectedOption("Dashboard");
  } else if (url.includes("personal-info")) {
    setSelectedOption("Personal Info");
  } else if (url.includes("inbox")) {
    setSelectedOption;
  }
};
