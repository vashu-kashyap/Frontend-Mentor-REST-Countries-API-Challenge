import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].value); // Select first option by default
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option) => {
    setSelected(option.label);
    onChange && onChange(option.value); // Call provided onChange function
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex  h-14 w-3/5  items-center justify-between rounded-md bg-white px-5 py-2 text-left font-semibold  text-very-dark-blue  shadow-sm focus:outline-none dark:bg-dark-blue dark:text-white lg:min-w-52"
      >
        {selected}
        <IoIosArrowDown />
      </button>
      {isOpen && (
        <ul className="absolute z-50 mt-1  w-3/5 overflow-hidden rounded-md bg-white shadow-lg dark:bg-dark-blue lg:min-w-52 ">
          {options.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => handleOptionChange(option)}
                className="block w-full px-3 py-2 text-left text-sm font-semibold  text-very-dark-blue hover:bg-gray-100 dark:text-white dark:hover:bg-very-dark-blue/50"
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
