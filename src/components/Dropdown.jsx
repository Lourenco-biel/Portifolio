import { useState } from 'react';

const Dropdown = ({ options, buttonContent, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (onClick) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className={className ?? 'button'}>
        {buttonContent}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-auto bg-white border border-gray-300 rounded shadow-lg">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-2 py-1 hover:bg-gray-300 cursor-pointer text-gray-900"
                onClick={() => handleOptionClick(option.onClick)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
