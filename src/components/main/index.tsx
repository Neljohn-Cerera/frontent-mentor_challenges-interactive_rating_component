import { useState } from "react";
import ButtonCirle from "./btn-circle";
import Star from "./star";
import ThankyouComponent from "./thankyou-component";

const data = [
  {
    id: 1,
    text: "1",
  },
  {
    id: 2,
    text: "2",
  },
  {
    id: 3,
    text: "3",
  },
  {
    id: 4,
    text: "4",
  },
  ,
  {
    id: 5,
    text: "5",
  },
];

const Main = () => {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [ratingCount, setRatingCount] = useState(0);
  const handleRating = (count: number) => {
    setRatingCount(count);
  };
  const handleSubmit = () => {
    setIsSubmitted(false);
    setTimeout(() => {
      setIsSubmitted(true);
      setRatingCount(0);
    }, 10000);
  };
  return (
    <>
      {isSubmitted ? (
        <div className="flex flex-col space-y-6 w-full bg-card rounded-2xl p-5 md:p-9 md:w-[30%] md:rounded-[30px]">
          <Star classname="relative w-[16px] h-[16px] p-5 rounded-full bg-circle/10" />
          <h1 className="text-white text-2xl font-overpass font-bold">
            How did we do?
          </h1>
          <p className="text-p_color font-overpass font-medium">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex flex-row justify-between h-full">
            {data.map((val: any) => (
              <ButtonCirle
                key={val.id}
                text={val.text as string}
                handleCLick={() => handleRating(val.id)}
              />
            ))}
          </div>
          <button
            className="bg-secondary py-3 rounded-full w-full text-white font-overpass font-bold
      hover:bg-white hover:text-secondary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : (
        <ThankyouComponent count={ratingCount} />
      )}
    </>
  );
};

export default Main;
