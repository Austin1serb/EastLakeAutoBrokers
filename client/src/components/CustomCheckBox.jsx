import React from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa'; // Import icons from react-icons
import '../Styles/CustomCheckBox.css'
const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      {checked ? (
        <FaCheckSquare className="checked-icon" onClick={onChange} />
      ) : (
        <FaRegSquare className="unchecked-icon" onClick={onChange} />
      )}
      <span className="compare-text" onClick={onChange} >  Compare</span>
    </label>
  );
};

export default CustomCheckbox;
