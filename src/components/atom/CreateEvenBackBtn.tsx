
interface BackBtnProp {
  text: string;
  onClick: () => void;
}

function CreateEvenBackBtn({ text, onClick }: BackBtnProp) {
  return (
    <button onClick={onClick} className="cursor-pointer w-fit">
      <span className="text-2xl text-[#4539B4]">{text}</span>
    </button>
  );
}

export default CreateEvenBackBtn;
