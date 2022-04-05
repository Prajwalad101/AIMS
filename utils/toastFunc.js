import { AiOutlineCheckSquare } from "react-icons/ai";
import { RiDeleteBin4Line } from "react-icons/ri";
import { toast } from "react-toastify";

export const addToastNotify = () =>
  toast.success("Item added successfully", {
    position: toast.POSITION.TOP_CENTER,
    icon: <AiOutlineCheckSquare size={30} />,
  });

export const deleteToastNotify = () =>
  toast.error("Item deleted successfully", {
    position: toast.POSITION.TOP_CENTER,
    icon: <RiDeleteBin4Line size={30} />,
    className: "bg-blue-500",
  });
