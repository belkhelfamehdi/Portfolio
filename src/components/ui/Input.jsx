import PropTypes from 'prop-types';

const Input = ({ id, type = "text", placeholder, required = false }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        className="mt-1 block w-full px-3 py-4 border-2 border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 text-black"
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;