const Footer = () => {
  return (
    <footer className="mt-[30px] py-6 w-[90%] mx-auto">
      {/* Horizontal line */}
      <div className="w-full border-t border-gray-300 mb-6"></div>

      {/* Links */}
      <div className=" flex justify-center space-x-8 ">
        <a href="/" className="text-[#1A9876] font-bold hover:underline">
          Sustainable Websites
        </a>
        <a href="/blog" className="text-[#1A9876] font-bold hover:underline">
          Blog
        </a>
        <a href="/contact" className="text-[#1A9876] font-bold hover:underline">
          Contact Us
        </a>
      </div>
      <div className="lg:flex text-center justify-between items-end">
        <div>
          <p className="text-[#1A9876]">Contact:</p>
          <p>contact@everythinggreen.org</p>
        </div>
        <div>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p className="text-[#1A9876]">Address:</p>
          <p>
            China Hong Kong City Block 3, Room 1203, <br/> 12th Floor,33 Canton
            Rd, Tsim Sha Tsui, Hong Kong
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
