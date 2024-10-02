import { TfiWorld } from "react-icons/tfi";

const Subscribe = () => {
  return (
    <div>
      <p className="text-[#1A9876] font-extrabold text-5xl text-center my-[50px]">
        learn more about <br /> web sustainability?
      </p>
      <div className="w-[90%] my-[30px] p-4 shadow-2xl border-4 rounded-3xl lg:w-[40%] mx-auto">
        <p className="text-[#1A9876] text-3xl text-center my-[5px]">
          join the greenWeb newsletter
        </p>
        <div className="flex justify-evenly my-[20px]">
          <input
            placeholder="your email address"
            className="rounded-full px-3 w-[60%] text-[rgb(26,152,118)] bg-gray-200 border-[2px] placeholder-[#37654E]"
          />
          <button className="px-4 py-2 rounded-full text-white text-md font-bold bg-[#223333] p-2 border-4 shadow-lg hover:bg-[#7ba99d]">
            subscribe
          </button>
        </div>
        <p className="text-md font-extralight">
          The greenWeb team will send you occasional updates on web
          accessibility and sustainability. There will be no spam, only
          high-quality information.
        </p>
      </div>
      <div className="w-[90%] lg:w-[60%] mx-auto my-[50px] border-2 rounded-t-3xl overflow-hidden">
        {/* Top section with green background */}
        <div className="bg-[#1A9876] h-[60px] flex items-center justify-center">
          <p className="text-white text-2xl font-bold px-4 text-center">
            claim and download your greenWeb certificate
          </p>
        </div>

        <div className="text-center my-[10px]">
          <p className="font-cosmic flex items-center gap-2 justify-center text-xl font-extrabold">
            <span className="text-[#1A9876]">Everything</span>
            <TfiWorld className="text-[#1A9876]" />
            <span>Green</span>
          </p>

          <p className="text-sm font-extralight">
            Measuring Impact, Driving Change
          </p>
        </div>
        {/* Bottom section with white background */}
        <div className="bg-white pb-4 px-4">
          <p className="text-center w-[90%] mx-auto text-lg">
            The green<span className="text-[#1A9876]">Web</span> team designed
            this website&apos;s carbon calculator to inspire and enlighten
            people about the importance of creating websites with low carbon
            emissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
