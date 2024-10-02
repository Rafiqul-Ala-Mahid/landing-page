import { useState } from "react";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import alphabet from "../assets/alphabet.png";
import redInc from "../assets/red-inc.png";

const websites = [
  { id: 1, name: "Google", image: google, emissions: "0.26gm/per visit" },
  { id: 2, name: "Facebook", image: facebook, emissions: "0.21gm/per visit" },
  { id: 3, name: "Alphabet", image: alphabet, emissions: "0.094gm/per visit" },
  { id: 4, name: "Red-Inc", image: redInc, emissions: "0.230gm/per visit" },
];

const DemoWebsite = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState(null);

  const openModal = (website) => {
    setSelectedWebsite(website);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWebsite(null);
  };

  return (
    <div>
      <h1 className="text-[#1A9876] font-extrabold text-5xl text-center my-[50px]">
        sustainable <br /> example websites
      </h1>

      <div className="w-[50%] mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4">
        {websites.map((website) => (
          <div
            key={website.id}
            className="cursor-pointer"
            onClick={() => openModal(website)}
          >
            <img
              src={website.image}
              alt={website.name}
              className="w-[80%] mx-auto shadow-2xl"
            />
            <div className="text-center my-[20px] text-lg text-[#045862]">
              <h1 className="text-xl font-bold">{website.name}</h1>
              <p>{website.emissions}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-w-[500px]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            {selectedWebsite && (
              <>
                <img
                  src={selectedWebsite.image}
                  alt={selectedWebsite.name}
                  className="w-full mb-4"
                />
                <h2 className="text-2xl text-[#045862] font-bold mb-2">
                  {selectedWebsite.name}
                </h2>
                <p className="text-[#045862]">{selectedWebsite.emissions}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoWebsite;
