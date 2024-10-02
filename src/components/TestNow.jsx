import { MdExpandLess } from "react-icons/md";

const TestNow = () => {
  return (
    <div className="w-[80%] mx-auto my-[80px] ">
      <p className="lg:w-[50%] mx-auto text-center font-extralight text-3xl">
        These websites avoid bloated frameworks by using compressed graphics,
        efficient file formats, and lightweight fonts. Check out our information
        on developing sustainable websites and establishing a page weight budget
        if you want to learn more.
      </p>
      <div className="flex justify-center mt-6">
        <button className="flex items-center px-4 py-2 rounded-full text-white text-md font-bold bg-[#223333] p-2 border-4 border-white shadow-lg hover:bg-[#7ba99d] ">
          <MdExpandLess className="text-xl font-bold"/>
          test now
        </button>
      </div>
    </div>
  );
};

export default TestNow;
