// TextareaField.js
import PropTypes from 'prop-types';

const TextArea = ({ id, rows = 4, placeholder, required = false }) => {
  return (
    <div>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="flex min-h-40 w-full rounded-md border-2 border-black px-3 py-2 text-sm font-bold text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500"
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default TextArea;