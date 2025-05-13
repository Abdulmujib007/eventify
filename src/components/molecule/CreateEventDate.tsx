// import "react-time-picker/dist/TimePicker.css";
// import "react-clock/dist/Clock.css";
"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface Props {
  ind: number;
  handleAdd: () => void;
  handleRemove: () => void;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CreateEventDate({
  ind,
  handleAdd,
  handleRemove,
}: Props) {
  const [value, onChange] = useState<Value>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [startValue, setStartValue] = useState({
    val1: 12,
    val2: 0,
    val3: "AM",
  });
  const [endValue, setEndValue] = useState({
    val1: 12,
    val2: 0,
    val3: "AM",
  });

  const handleEndAddVal1 = () => {
    if (endValue.val1 === 0) {
      setEndValue({ ...endValue, val1: 12 });
    } else {
      setEndValue({ ...endValue, val1: endValue.val1 - 1 });
    }
  };

  const handleEndAddVal2 = () => {
    if (endValue.val2 === 0) {
      setEndValue({ ...endValue, val2: 55 });
    } else {
      setEndValue({ ...endValue, val2: endValue.val2 - 5 });
    }
  };

  const handleEndMinusVal1 = () => {
    if (endValue.val1 === 12) {
      setEndValue({ ...endValue, val1: 0 });
    } else {
      setEndValue({ ...endValue, val1: endValue.val1 + 1 });
    }
  };

  const handleEndMinusVal2 = () => {
    if (endValue.val2 === 55) {
      setEndValue({ ...endValue, val2: 0 });
    } else {
      setEndValue({ ...endValue, val2: endValue.val2 + 5 });
    }
  };

  const handleEndFormat = () => {
    if (endValue.val3 === "AM") {
      setEndValue({ ...endValue, val3: "PM" });
    } else {
      setEndValue({ ...endValue, val3: "AM" });
    }
  };














  const handleMinusVal1 = () => {
    if (startValue.val1 === 12) {
      setStartValue({ ...startValue, val1: 0 });
    } else {
      setStartValue({ ...startValue, val1: startValue.val1 + 1 });
    }
  };
  const handleAddVal1 = () => {
    if (startValue.val1 === 0) {
      setStartValue({ ...startValue, val1: 12 });
    } else {
      setStartValue({ ...startValue, val1: startValue.val1 - 1 });
    }
  };

  const handleAddVal2 = () => {
    if (startValue.val2 === 0) {
      setStartValue({ ...startValue, val2: 55 });
    } else {
      setStartValue({ ...startValue, val2: startValue.val2 - 5 });
    }
  };

  const handleMinusVal2 = () => {
    if (startValue.val2 === 55) {
      setStartValue({ ...startValue, val2: 0 });
    } else {
      setStartValue({ ...startValue, val2: startValue.val2 + 5 });
    }
  };

  const handleStartFormat = () => {
    if (startValue.val3 === "AM") {
      setStartValue({ ...startValue, val3: "PM" });
    } else {
      setStartValue({ ...startValue, val3: "AM" });
    }
  };

  return (
    <div className="ml-10 flex gap-10 items-start w-full">
      <section className="flex flex-col gap-4 justify-center w-[28%] ">
        <div className="flex items-center">
          <span className="font-bold text-xl">Start Date</span>
          <Image
            className="mb-2"
            src={"/_.svg"}
            alt="star-svg"
            width={15}
            height={26}
          />
        </div>
        <div
          onClick={() => setShowCalendar(!showCalendar)}
          className={`flex gap-8 rounded-lg border-[2px] ${
            showCalendar ? "border-[#0076B8]" : "border-[#828282]"
          }  w-full items-center`}
        >
          <div className=" bg-tifyGray p-3">
            <Image
              src={"/Vector 4.svg"}
              alt="date-icon"
              width={30}
              height={20}
            />
          </div>
          <span
            className={`text-xl ${
              showCalendar ? "text-[#ACACAC]" : "text-black"
            } `}
          >
            {showCalendar ? "DD/MM/YY" : value?.toLocaleString().slice(0, 10)}
          </span>
        </div>
        <div className={` ${showCalendar ? "block" : "hidden"}  w-full`}>
          <Calendar onChange={onChange} value={value} />
        </div>
      </section>
      <section className="flex flex-col gap-4 justify-center w-[28%] ">
        <div className="flex items-center">
          <span className="font-bold text-xl">Start Time</span>
          <Image
            className="mb-2"
            src={"/_.svg"}
            alt="star-svg"
            width={15}
            height={26}
          />
        </div>
        <div
          onClick={() => setShowStart(!showStart)}
          className={`flex gap-8 rounded-lg border-[2px] ${
            showStart ? "border-[#0076B8]" : "border-[#828282]"
          }  w-full items-center`}
        >
          <div className=" bg-tifyGray p-3 ">
            <Image src={"/Group.svg"} alt="date-icon" width={30} height={20} />
          </div>
          <span
            className={`text-xl ${
              showStart ? "text-[#ACACAC]" : "text-black"
            } `}
          >
            {showStart
              ? "12:00 AM"
              : (startValue.val1 < 10
                  ? "0" + startValue.val1
                  : startValue.val1) +
                ":" +
                (startValue.val2 < 10
                  ? "0" + startValue.val2
                  : startValue.val2) +
                " " +
                startValue.val3}
          </span>
        </div>
        {showStart && (
          <div className="w-full bg-white time-shadow py-8 flex justify-center items-center">
            <main className="flex gap-2.5">
              <div className="flex flex-col gap-3 items-center ">
                <Image
                  onClick={handleAddVal1}
                  src={"/Vector 3 2.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
                <p className="py-[0.8rem] px-[1rem] text-2xl rounded-lg border-[1px] border-[#828282] ">
                  {startValue.val1 < 10
                    ? "0" + startValue.val1
                    : startValue.val1}
                </p>
                <Image
                  onClick={handleMinusVal1}
                  src={"/Vector 3 3.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
              </div>
              <Image
                src={"/Colon.svg"}
                alt="colon-icon"
                width={12}
                height={63}
              />
              <div className="flex flex-col gap-3 items-center ">
                <Image
                  onClick={handleAddVal2}
                  src={"/Vector 3 2.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
                <p className="py-[0.8rem] px-[1rem] text-2xl rounded-lg border-[1px] border-[#828282] ">
                  {startValue.val2 < 10
                    ? "0" + startValue.val2
                    : startValue.val2}
                </p>
                <Image
                  onClick={handleMinusVal2}
                  src={"/Vector 3 3.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
              </div>
              <div className="flex flex-col gap-3 items-center ml-2.5">
                <Image
                  onClick={handleStartFormat}
                  src={"/Vector 3 2.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
                <p className="py-[0.8rem] px-[0.75rem] text-2xl rounded-lg border-[1px] border-[#828282] ">
                  {startValue.val3}
                </p>
                <Image
                  onClick={handleStartFormat}
                  src={"/Vector 3 3.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
              </div>
            </main>
          </div>
        )}
      </section>
      <section className="flex flex-col gap-4 justify-center w-[28%]">
        <div className="flex items-center">
          <span className="font-bold text-xl">End Time</span>
        </div>
        <div
          onClick={() => setShowEnd(!showEnd)}
          className={`flex gap-8 rounded-lg border-[2px] ${
            showEnd ? "border-[#0076B8]" : "border-[#828282]"
          }  w-full items-center`}
        >
          <div className=" bg-tifyGray p-3 ">
            <Image src={"/Group.svg"} alt="date-icon" width={30} height={20} />
          </div>
          <span
            className={`text-xl ${
              showEnd ? "text-[#ACACAC]" : "text-black"
            } `}
          >
            {showEnd
              ? "12:00 AM"
              : (endValue.val1 < 10
                  ? "0" + endValue.val1
                  : endValue.val1) +
                ":" +
                (endValue.val2 < 10
                  ? "0" + endValue.val2
                  : endValue.val2) +
                " " +
                endValue.val3}
          </span>
        </div>
        {showEnd && (
          <div className="w-full bg-white time-shadow py-8 flex justify-center items-center">
            <main className="flex gap-2.5">
              <div className="flex flex-col gap-3 items-center ">
                <Image
                  onClick={handleEndAddVal1}
                  src={"/Vector 3 2.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
                <p className="py-[0.8rem] px-[1rem] text-2xl rounded-lg border-[1px] border-[#828282] ">
                  {endValue.val1 < 10
                    ? "0" + endValue.val1
                    : endValue.val1}
                </p>
                <Image
                  onClick={handleEndMinusVal1}
                  src={"/Vector 3 3.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
              </div>
              <Image
                src={"/Colon.svg"}
                alt="colon-icon"
                width={12}
                height={63}
              />
              <div className="flex flex-col gap-3 items-center ">
                <Image
                  onClick={handleEndAddVal2}
                  src={"/Vector 3 2.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
                <p className="py-[0.8rem] px-[1rem] text-2xl rounded-lg border-[1px] border-[#828282] ">
                  {endValue.val2 < 10
                    ? "0" + endValue.val2
                    : endValue.val2}
                </p>
                <Image
                  onClick={handleEndMinusVal2}
                  src={"/Vector 3 3.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
              </div>
              <div className="flex flex-col gap-3 items-center ml-2.5">
                <Image
                  onClick={handleEndFormat}
                  src={"/Vector 3 2.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
                <p className="py-[0.8rem] px-[0.75rem] text-2xl rounded-lg border-[1px] border-[#828282] ">
                  {endValue.val3}
                </p>
                <Image
                  onClick={handleEndFormat}
                  src={"/Vector 3 3.svg"}
                  alt="time-icon"
                  width={25}
                  height={18}
                />
              </div>
            </main>
          </div>
        )}
      </section>
      <div className="flex gap-2.5">
        <Image
          className={`cursor-pointer ${ind === 0 ? "block" : "hidden"} `}
          onClick={handleAdd}
          src={"/Add button.svg"}
          alt="add-btn"
          width={20}
          height={20}
        />
        <Image
          className={`cursor-pointer ${ind !== 0 ? "block" : "hidden"} `}
          onClick={handleRemove}
          src={"/Remove button (1).svg"}
          alt="remove-btn"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
