import landing1 from "../assets/LandingPage-1.png"
import landing2 from "../assets/LandingPage-2.png"

const Section = () => {
  return (
    <>
      <div className="py-4 px-[10%] bg-gradient-to-r via-[#21AE7C] from-[#045661] to-[#37C9B8] flex flex-col-reverse lg:flex-row items-center">
        {/* Text and Button Section */}
        <div className="w-full text-center lg:text-left lg:w-[50%] mx-auto lg:mx-0 lg:py-0">
          <p className="text-white text-3xl lg:text-[40px] font-extrabold">
            Unlock Insights for a Greener <br /> Future!
          </p>
          <p className="text-white py-3 lg:py-[50px]">
            Download our comprehensive whitepaper now and embark on a journey
            towards a more sustainable future.
          </p>
          <button className="py-3 px-5 font-bold shadow-2xl bg-gray-300 rounded-full hover:bg-[#045661] hover:text-white">
            Download Now!
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[50%] flex justify-center items-center">
          {/* Background image */}
          <img src={landing1} alt="Background" className="w-[500px]" />

          {/* Overlay image */}
          <img
            src={landing2}
            alt="Overlay"
            className="absolute bottom-4 right-4 w-16 h-16 hidden"
          />
        </div>
      </div>
    </>
  );
};

export default Section;
