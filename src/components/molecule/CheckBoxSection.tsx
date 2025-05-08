import React, { useState } from "react";

interface CheckboxOption {
  id: string;
  name: string;
  value: string;
  label: string;
}

interface CheckBoxSectionProps {
  title?: string;
  initialOptions?: CheckboxOption[];
  additionalOptions?: CheckboxOption[];
  onChange?: (selectedValues: string[]) => void;
  className?: string;
  enableShowMore?: boolean;
  showMoreText?: boolean;
  showLessText?: boolean;
}

const CheckBoxSection: React.FC<CheckBoxSectionProps> = ({
  title = "Category",
  initialOptions = [
    {
      id: "option1",
      name: "Adventure Travel",
      value: "Adventure Travel",
      label: "Adventure Travel",
    },
    {
      id: "option2",
      name: "Art Exhibitions",
      value: "Art Exhibitions",
      label: "Art Exhibitions",
    },
    {
      id: "option3",
      name: "Auctions & Fundraisers",
      value: "Auctions & Fundraisers",
      label: "Auctions & Fundraisers",
    },
    {
      id: "option4",
      name: "Beer Festivals",
      value: "Beer Festivals",
      label: "Beer Festivals",
    },
    {
      id: "option5",
      name: "Benefit Concerts",
      value: "Benefit Concerts",
      label: "Benefit Concerts",
    },
  ],
  additionalOptions = [
    {
      id: "option6",
      name: "Charity Galas",
      value: "Charity Galas ",
      label: "Charity Galas ",
    },
    {
      id: "option7",
      name: "Children’s Workshops",
      value: "Children’s Workshops",
      label: "Children’s Workshops",
    },
    {
      id: "option8",
      name: "Comedy Shows",
      value: "Comedy Shows",
      label: "Comedy Shows",
    },
    {
      id: "option9",
      name: "Concerts & Music Festivals",
      value: "Concerts & Music Festivals",
      label: "Concerts & Music Festivals",
    },
    {
      id: "option10",
      name: "Cooking Classes",
      value: "Cooking Classes",
      label: "Cooking Classes",
    },
    {
      id: "option11",
      name: "Dance Classes",
      value: "Dance Classes",
      label: "Dance Classes",
    },
    {
      id: "option12",
      name: "Dining & Drinking",
      value: "Dining & Drinking",
      label: "Dining & Drinking",
    },
    {
      id: "option13",
      name: "Fashion Shows",
      value: "Fashion Shows",
      label: "Fashion Shows",
    },
    {
      id: "option14",
      name: "Food & Drink Festivals",
      value: "Food & Drink Festivals",
      label: "Food & Drink Festivals",
    },
    {
      id: "option15",
      name: "Gardening Classes",
      value: "Gardening Classes",
      label: "Gardening Classes",
    },
  ],
  onChange,
  className = "",
  enableShowMore = true,
  showMoreText = "More",
  showLessText = "Less",
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  // const [isAnimating, setIsAnimating] = useState(false);

  const handleCheckboxChange = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    setSelectedValues(newValues);

    if (onChange) {
      onChange(newValues);
    }
  };

  const toggleShowMore = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const visibleOptions =
    !enableShowMore || showMoreOptions
      ? [...initialOptions, ...additionalOptions]
      : initialOptions;

  return (
    <div
      className={`pb-[3.4375rem]  w-[18.375rem] mr-[3rem] border-b-1 border-[#6F6F6F] ${className} `}
    >
      <p className="mb-[0.75rem] text-[1.5rem] font-semibold mt-[3.125rem]">
        {title}
      </p>
      <div>
        {visibleOptions.map((item, ind) => (
          <div key={ind} className="flex items-center mt-[1.125rem]">
            <input
              type="checkbox"
              id={item.id}
              name={item.name}
              value={item.value}
              checked={selectedValues.includes(item.value)}
              onChange={() => handleCheckboxChange(item.value)}
              className="mr-2 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <label
              htmlFor={item.id}
              className=" cursor-pointer text-[1.25rem] text-[#2B293D]"
            >
              {item.label}
            </label>
          </div>
        ))}

        {enableShowMore && additionalOptions.length > 0 && (
          <button
            onClick={toggleShowMore}
            className="text-[#4539B4] text-[1.375rem] cursor-pointer mt-[1.125rem]  "
          >
            {showMoreOptions ? showLessText : showMoreText}
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckBoxSection;
