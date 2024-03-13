import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import PropTypes from 'prop-types';
export default function Course({course, handaleSelect}) {
  const { name, description, photo, price, credit} = course;
  return (
    <div className="bg-white p-4 rounded-xl">
      <div>
        <img className="w-full" src={photo} alt="" />
      </div>
      <h2 className="text-lg font-semibold text-[#1C1B1B] my-4">{name}</h2>
      <p className="text-[#1C1B1B99] text-sm font-normal">{description}</p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center text-[#1C1B1B99] text-base font-medium space-x-3">
          <FiDollarSign />
          <p>Price :</p>
          <p>{price}</p>
        </div>
        <div className="flex items-center text-[#1C1B1B99] text-base font-medium space-x-3">
          <GoBook />
          <p>Credit :</p>
          <p>
            <span>{credit}</span>hr
          </p>
        </div>
      </div>
      <button onClick={()=>handaleSelect(course)} className="bg-[#2F80ED] border border-[#2F80ED] rounded-lg p-3 w-full text-white text-lg font-semibold mt-6">
        Select
      </button>
    </div>
  );
}

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handaleSelect: PropTypes.func.isRequired,

}
