import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//to make notifactio to any componentet
export const notify = (msg: String, type: "warn" | "success" | "error") => {
  const option = { position: toast.POSITION.TOP_RIGHT };
  if (type === "warn") toast.warn(msg, option);
  else if (type === "success") toast.success(msg, option);
  else if (type === "error") toast.error(msg, option);
};
export { ToastContainer };
