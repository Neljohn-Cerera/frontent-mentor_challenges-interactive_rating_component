import Image from "./image";

const ThankyouComponent = ({ count }: { count: number }) => {
  return (
    <div
      className="flex flex-col items-center space-y-6 w-full  bg-card rounded-2xl px-5 py-10
    md:p-9 md:w-[30%] md:rounded-[30px]"
    >
      <Image />
      <div className="bg-circle/10 w-[62%] rounded-full py-2 flex justify-center items-center">
        <span className="text-secondary/70 font-overpass font-medium">
          You selected {count} out of 5
        </span>
      </div>
      <h1 className="text-white text-2xl font-overpass font-bold">
        Thank you!
      </h1>
      <p className="text-p_color font-overpass font-medium text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankyouComponent;
