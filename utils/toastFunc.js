import { AiOutlineCheckSquare } from "react-icons/ai";
import { RiDeleteBin4Line } from "react-icons/ri";
import { toast } from "react-toastify";

export const addToastNotify = () =>
  toast.success("Item added successfully", {
    position: toast.POSITION.TOP_CENTER,
    icon: <AiOutlineCheckSquare size={30} />,
  });

export const updateToastNotify = () =>
  toast.success("Item updated successfully", {
    position: toast.POSITION.TOP_CENTER,
    icon: <AiOutlineCheckSquare size={30} />,
  });

export const deleteToastNotify = () =>
  toast.error("Item deleted successfully", {
    position: toast.POSITION.TOP_CENTER,
    icon: <RiDeleteBin4Line size={30} />,
    className: "bg-blue-500",
  });

export const verificationToastNotify = () =>
  toast.error("You must be verified to add products", {
    position: toast.POSITION.TOP_CENTER,
    icon: <RiDeleteBin4Line size={30} />,
    className: "bg-blue-500",
  });

export const applicationSubmitToastNotify = () =>
  toast.success("Application submitted successfully", {
    position: toast.POSITION.TOP_CENTER,
    icon: <AiOutlineCheckSquare size={30} />,
  });

export const verifyUserToastNotify = () =>
  toast.success("Verified User successfully", {
    position: toast.POSITION.TOP_CENTER,
    icon: <AiOutlineCheckSquare size={30} />,
  });

export const successToastNotify = (message) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    icon: <AiOutlineCheckSquare size={30} />,
  });

export const errorToastNotify = (message) =>
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    // icon: <RiDeleteBin4Line size={30} />,
    className: "bg-blue-500",
  });
