import React from "react";
const LicenceModal = ({ closeModal }) => {
  return (
    <div className="modal-pr z-50 fixed -top-4 inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-[0.3s]">
      <div className="bg-white lg:w-[20%] md:w-[60%] sm:w-[80%] w-[97%] rounded-sm shadow-md">
        <div className="p-4 bg-[#1a1c34] rounded-tl-sm rounded-tr-sm">
          <p className="text-[18px] text-white">Foydalanish shartlari</p>
        </div>
        <div className="pt-4 pr-2 pb-2 pl-4">
          <p className="text-base text-[#0000000DE] mb-4">
            Men shaxsiy ma'lumotlarimni O'zbekiston Respublikasining <br />
            <a
              className="text-[#2A5BB4] underline"
              href="https://lex.uz/docs/4396428"
              target="_blank"
            >
              "Shaxsiy ma'lumotlar to'g'risida"
            </a>
            gi qonuniga muvofiq qayta <br /> ishlanishiga.
          </p>
          <button
            className="px-4 py-1.5 bg-[#018E7B] text-white uppercase flex ml-auto rounded-sm transition-all duration-[0.3s] hover:bg-[#360012]"
            onClick={closeModal}
            type="submit"
          >
            YOPISH
          </button>
        </div>
      </div>
    </div>
  );
};
export default LicenceModal;
