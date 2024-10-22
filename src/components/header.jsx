import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false); // To manage dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState("O'zbek"); // Default language

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setOpen(false); // Close dropdown after selection
  };

  return (
    <header className="bg-[#1a1c34]">
      <div className="wrapper flex items-center justify-between">
        <a
          className="text-white flex items-center bg-[#018e7b] md:px-3 py-2 px-4 rounded-sm hover:bg-[#360012] transition-all duration-[0.3s]"
          href="/https://entry.davxizmat.uz/qmaticwebbooking/index.html#/search"
        >
          <IoSearch className="text-[20px] mr-1" />
          <p className="uppercase text-[14px] md:block hidden">
            Belgilangan uchrashuvni topish
          </p>
        </a>
        <div className="w-[290px]">
          <img
            className="block w-full"
            src="/public/logo.png"
            alt="Adliya Vazirligi Davlat Xizmatlari"
          />
        </div>
        <div className="relative inline-block text-left">
          {/* Main button */}
          <button
            onClick={toggleDropdown}
            className="flex items-center md:justify-between md:w-40 md:px-4 py-2 px-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#018e7b]"
          >
            {/* Katta ekranlar uchun to'liq ism */}
            <span className="hidden md:block">{selectedLanguage}</span>
            {/* Kichik ekranlar uchun qisqacha ism */}
            <span className="block md:hidden">
              {selectedLanguage === "O'zbek" ? "UZ" : "RU"}
            </span>
            <svg
              className={`w-5 h-5 ml-2 transition-transform ${
                open ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown list */}
          {open && (
            <div className="absolute z-10 mt-1 md:w-40 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="py-1">
                <li
                  onClick={() => selectLanguage("O'zbek")}
                  className="flex items-center px-3 py-2 pr-5 text-sm cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src="/public/uzb.svg"
                    alt="Uzbek Flag"
                    className="w-5 h-4 mr-2"
                  />
                  <span className="block md:hidden">UZ</span>{" "}
                  {/* Kichik ekranlar uchun */}
                  <span className="hidden md:block">O'zbek</span>{" "}
                  {/* Katta ekranlar uchun */}
                </li>
                <li
                  onClick={() => selectLanguage("Русский")}
                  className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src="/public/russia.svg"
                    alt="Russian Flag"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="block md:hidden">RU</span>{" "}
                  {/* Kichik ekranlar uchun */}
                  <span className="hidden md:block">Русский</span>{" "}
                  {/* Katta ekranlar uchun */}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
