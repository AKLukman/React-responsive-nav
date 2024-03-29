import PropTypes from "prop-types";
import { IoCheckmarkDone } from "react-icons/io5";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <IoCheckmarkDone className="text-red-700" />
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default Feature;
