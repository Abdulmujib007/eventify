import CreateEvenBackBtn from "../atom/CreateEvenBackBtn";
import CreateEventBtn from "../atom/CreateEventBtn";

interface BtnsProp {
    handleBack : () => void;
    handleForward : () => void;
}

function NewEventImageUpload({handleBack,handleForward} : BtnsProp ) {
  return (
    <div>
      <header className="text-[2.5rem] font-medium ">Upload Image</header>
      <main className="mt-8 flex flex-col gap-5">
        <input
          type="file"
          className="outline-none border-[1px]  border-[#828282] w-[60%] py-2.5 px-6 text-2xl text-[#ACACAC] rounded-lg file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:rounded-lg file:text-[#1D1D1D] file:text-xl file:mr-4 hover:cursor-pointer "
        />
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