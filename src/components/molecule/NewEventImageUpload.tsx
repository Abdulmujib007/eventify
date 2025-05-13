'use client'

import Image from "next/image";
import CreateEvenBackBtn from "../atom/CreateEvenBackBtn";
import CreateEventBtn from "../atom/CreateEventBtn";
import { useState } from "react";

interface BtnsProp {
    handleBack : () => void;
    handleForward : () => void;
}

function NewEventImageUpload({handleBack,handleForward} : BtnsProp ) {

  const [selectedFile,setSelectedFile] = useState<null | File >(null)

  const handleFileChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if(file){
      setSelectedFile(file)
    }
  }
  const removeFile = () => {
    setSelectedFile(null)
  }

  return (
    <div>
      <header className="text-[2.5rem] font-medium ">Upload Image</header>
      <main className="mt-8 flex flex-col gap-5">
        <div className=" border-[1px] rounded-lg  border-[#828282] w-[60%] py-2.5 px-6 flex justify-between items-center ">
          {!selectedFile && (
            <input
              type="file"
              onChange={handleFileChange}
              accept=".jpg,.gif,.png"
              className="outline-none text-2xl text-[#ACACAC]  file:bg-[#EEEEEE]  file:py-1 file:px-2.5 file:rounded-lg file:text-[#1D1D1D] file:border-[1px] file:border-[#1D1D1D] file:text-xl file:mr-4 hover:cursor-pointer "
            />
          )}
          {selectedFile && (
            <>
              <div className="flex gap-2 items-center">
                <Image
                  src={"/folder-image-fill.svg"}
                  alt="folder-img"
                  width={30}
                  height={30}
                />
                <span className="truncate text-2xl py-1 w-[50%] ">{selectedFile.name}</span>
              </div>
              <Image
                className="cursor-pointer"
                onClick={removeFile}
                src={"/Close button.svg"}
                alt="back-btn"
                width={40}
                height={20}
              />
            </>
          )}
        </div>

        <p className="text-2xl text-[#5A5A5A] flex flex-col gap-y-3">
          <span>
            Feature Image must be at least 1170 pixels wide by 504 pixels high.
          </span>
          <span>Valid file formats: JPG, GIF, PNG.</span>
        </p>
      </main>
      <div className="mt-[12.875rem] flex justify-end items-center gap-x-8">
        <CreateEvenBackBtn text="Go back to Edit Event" onClick={handleBack} />
        <CreateEventBtn text="Save & Continue" onClick={handleForward} />
      </div>
    </div>
  );
}

export default NewEventImageUpload