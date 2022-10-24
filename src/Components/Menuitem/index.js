import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menuitem = ({ icon, title, action, isActive = null }) => (
  <button
    className="bg-transparent border-none rounded-lg text-white h-7 mr-1 p-1 w-7 hover:bg-black hover:text-white isActive:bg-black isActive:text-white"
    onClick={action}
    title={title}>
    <FontAwesomeIcon icon={icon} />
  </button>
);

export default Menuitem;
