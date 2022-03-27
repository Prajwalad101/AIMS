export const farmerSidebarData = [
  {
    title: "Dashboard",
    id: "1",
    url: "/user/dashboard",
  },
  {
    title: "Personal Info",
    id: "2",
    url: "/personal-info",
  },
  {
    title: "Inbox",
    id: "3",
    url: "/inbox",
  },
  {
    title: "Products",
    id: "4",
    url: "/products",
  },
  {
    title: "Log out",
    id: "5",
    url: "/logout",
  },
];

export const adminSidebarData = [
  {
    title: "Dashboard",
    id: "1",
    url: "/admin/dashboard",
  },
  {
    title: "Applications",
    id: "2",
    url: "/users",
  },
  {
    title: "Inbox",
    id: "3",
    url: "/inbox",
  },
  {
    title: "Products",
    id: "4",
    url: "/products",
  },
  {
    title: "Log out",
    id: "5",
    url: "/logout",
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
