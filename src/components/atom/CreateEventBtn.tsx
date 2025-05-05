
interface BtnProp {
    text: string;
    onClick : () => void
}

function CreateEventBtn({text,onClick} : BtnProp) {
  return (
    <button
      onClick={onClick}
      className="w-fit py-5 px-16 rounded-xl bg-[#2B293D] cursor-pointer"
    >
      <span className="font-bold text-2xl text-white">{text}</span>
    </button>
  );
}

export default CreateEventBtn
