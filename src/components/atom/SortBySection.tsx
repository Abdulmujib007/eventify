"use client";
import React, { useState, useEffect, useRef } from "react";

interface SortDropdownProps {
  options?: string[];
  onSortChange: (sortBy: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  options = ["Relevance", "Date"],
  onSortChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0] || "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option: string) => {
    setSelected(option);
    onSortChange(option);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center space-x-[0.8125rem] ">
      <span className="font-medium text-[1.25rem] ">Sort by:</span>

      <div ref={ref} className="relative inline-block flex-1">
        <button
          onClick={toggleDropdown}
          className="w-[16.875rem] px-3.5 py-3 border rounded-md shadow-sm flex justify-between gap-x-[6.25rem] items-center text-gray-700 cursor-pointer"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="text-left font-bold">{selected}</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul
            role="listbox"
            className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-10"
          >
            {options.map((option) => (
              <li
                key={option}
                role="option"
                tabIndex={0}
                onClick={() => selectOption(option)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectOption(option);
                  }
                }}
                className={`cursor-pointer select-none py-2 px-4 ${
                  selected === option
                    ? " font-semibold"
                    : "hover:bg-[#cbcbcb] duration-300"
                }`}
                aria-selected={selected === option}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;
