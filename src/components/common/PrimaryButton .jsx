import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PrimaryButton = ({ outline, children, to,}) => {
    const buttonClasses = outline
      ? "btn mt-4 border-blue-500 text-white hover:bg-blue-500 hover:text-white shadow-lg"
      : "btn mt-4  border-2 border-blue-500 text-blue-500 hover:bg-blue-500 shadow-lg";
  
    return (
      <button className={`${buttonClasses} `} >
        <Link to={to} className={`flex items-center gap-3 ${outline ? "text-blue-500" : "text-white hover:text-blue-500"}`}>
          {children}
          <FaArrowRight />
        </Link>
      </button>
    );
  };

export default PrimaryButton 
