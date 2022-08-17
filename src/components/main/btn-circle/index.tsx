type Props = {
  handleCLick: () => void;
  text: string;
};

const ButtonCirle = ({ text, handleCLick }: Props) => {
  return (
    <button
      className="text-p_color font-overpass font-bold w-[16px] h-[16px] 
        flex justify-center items-center p-5 rounded-full bg-circle/10
        hover:bg-secondary hover:text-white active:bg-p_color"
      onClick={handleCLick}
    >
      {text}
    </button>
  );
};

export default ButtonCirle;
