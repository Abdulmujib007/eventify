import React from 'react'

import Image from 'next/image';

interface TicketProp {
    ticketName:string;
    ticketPrice : string;
    ind:number;
    handleAdd:() => void;
    handleRemove : () => void;
} 

function TicketDetails({ticketName,ticketPrice,ind,handleAdd,handleRemove} : TicketProp) {
  return (
    <section className="mt-8 flex gap-x-16 items-end">
      <div className="flex flex-col gap-y-4 w-fit ">
        <span className="font-semibold text-2xl">{ticketName}</span>
        <input
          className="text-[1.375rem] px-6 py-3.5 border-[1px] border-[#828282] rounded-lg w-[32rem] "
          type="text"
          placeholder="Ticket Name e.g. General Admission"
        />
      </div>
      <div className="flex flex-col gap-y-4 w-fit">
        <span className="font-semibold text-2xl">{ticketPrice}</span>
        <div className="w-[18rem] border-[1px] border-[#828282] rounded-lg flex">
          <div className="px-5 py-4.5 bg-[#828282] rounded-l-lg">
            <Image src={"/₹.svg"} alt="currency-icon" width={12} height={12} />
          </div>
          <input
            placeholder="0.00"
            type="text"
            className="py-4.5 px-[1.375rem] text-[1.375rem outline-none"
          />
        </div>
      </div>
      <div className="ml-[3rem] flex gap-8">
        <Image
          onClick={handleRemove}
          className={`${ind == 0 ? "hidden" : "block"}`}
          src={"/Remove button (1).svg"}
          alt="remove-icon"
          width={20}
          height={20}
        />
        <Image onClick={handleAdd}  src={"/Add button.svg"} alt="add-icon" width={20} height={20} />
      </div>
    </section>
  );
}

export default TicketDetails