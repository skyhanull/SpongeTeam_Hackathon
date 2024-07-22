type MainButtonProps = {
  text: string;
  click: () => void;
};

function MainButton({ text, click }: MainButtonProps) {
  return (
    <button
      className="bg-customBlue py-4 px-6  text-white rounded-full font-bold  "
      onClick={click}
    >
      {text}
    </button>
  );
}
export default MainButton;
