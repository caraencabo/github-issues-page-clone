import { useState } from "react";

export default function Dropdown({ buttonText, options, onSelect }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionClick = (filter) => {
    onSelect(filter);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-black focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        style={{ backgroundColor: "#f6f8fa" }}
      >
        {buttonText}
        <svg
          className={`w-2.5 h-2.5 ms-3 transform ${isDropdownOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div className={`${isDropdownOpen ? "block" : "hidden"} z-10 absolute mt-2 bg-white rounded-md shadow w-auto dark:bg-gray-700 border border-gray-300`}>
        <ul
          className="text-xs text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {options.map((option, index) => (
            <li key={index}>
              <a
                href={option.link}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b border-gray-300"
                onClick={() => handleOptionClick(option.filter)}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
