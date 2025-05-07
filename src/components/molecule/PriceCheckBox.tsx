import React, { useState } from "react";

interface CheckboxSelectProps {
  id: string;
  name: string;
  value: string;
  label: string;
}

const PriceCheckBox = () => {
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);

  const priceList: CheckboxSelectProps[] = [
    { id: "option1", name: "Free", value: "Free", label: "Free" },
    { id: "option2", name: "Paid", value: "Paid", label: "Paid" },
  ];

  const handleCheckboxChange = (value: string) => {
    setSelectedPrice((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div>
      <p>Price</p>
      <form className="">
        {priceList.map((price) => (
          <div key={price.id} className="flex items-center">
            <input
              type="checkbox"
              id={price.id}
              name={price.name}
              value={price.value}
              checked={selectedPrice.includes(price.value)}
              onChange={() => handleCheckboxChange(price.value)}
              className="mr-2"
              width={20}
              height={20}
            />
            <label htmlFor={price.id}>{price.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default PriceCheckBox;
