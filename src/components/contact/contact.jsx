import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import LicenceModal from "../../licenceModal";

const Contact = ({ step, selected, STEPS }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    birthDate: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLicenceChecked, setIsLicenceChecked] = useState(false);

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocusedField(null);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleLicenceCheck = () => {
    setIsLicenceChecked(!isLicenceChecked);
    setErrors({ ...errors, licence: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.surName) {
      newErrors.surName = "Talab qilinadi";
    }
    if (!formData.firstName) {
      newErrors.firstName = "Talab qilinadi";
    }
    if (!formData.birthDate) {
      newErrors.birthDate = "Talab qilinadi";
    }
    if (!formData.email) {
      newErrors.email = "Talab qilinadi";
    }
    if (!formData.countryCode) {
      newErrors.countryCode = "Talab qilinadi";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Talab qilinadi";
    }
    if (!isLicenceChecked) {
      newErrors.licence =
        "Davom etishdan avval siz foydalanish shartlari va xavfsizlik siyosati bilan tanishib chiqishingiz lozim.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  const getInputClass = (field) =>
    `border ${errors[field] ? "border-red-500" : "border-gray-300"} 
    rounded-sm px-3 py-5 pb-1 w-full focus:outline-none focus:ring-1 
    ${errors[field] ? "focus:ring-red-500" : "focus:ring-[#018E7B]"}`;

  const getLabelClass = (field) =>
    `absolute top-2 left-3 transition-all duration-200 
    ${
      formData[field] || focusedField === field
        ? "-translate-y-2 text-sm"
        : "text-[#212529]"
    }
    ${errors[field] ? "text-red-500" : "text-gray-700"}`;

  return (
    <div className="accordion-item pb-7">
      <button className={`accordion-header active`}>
        <span className="accordion-number">4</span> ALOQA MA'LUMOTLARI
        <IoIosArrowDown
          className={`w-5 h-5 transition-transform ml-auto ${
            step === STEPS.CONTACT ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
      <div className="accordion-body">
        <div className="relative py-4 px-6 mb-1">
          <div className="text-[#212529]">
            <h3 className="text-[20px] leading-[1.5] font-medium tracking-[.25px]">
              Tanlangan xizmat va davlat xizmatlari markazi filiali:
            </h3>
            <p className="text-[18px] leading-[1.5] font-light">Xizmat turi</p>
            <p className="text-[18px] leading-[1.5] font-light">
              Xizmat amalga oshiriladigan filial nomi!
            </p>
            <p className="text-[18px] leading-[1.5] font-light">
              Xizmat amalga oshirilish sanasi va vaqti!
            </p>
          </div>
          <button
            className="absolute top-0 right-0 bg-[#fafafa] px-4 py-3 text-[#ff5252] border border-solid border-[#ff5252] uppercase rounded-sm font-medium transition-all duration-[0.3s] hover:bg-[#ff5252] hover:text-white hover-outline-0 focus:outline focus:outline-1 focus:outline-[#ff5252]"
            type="submit"
          >
            Uchrashuvni o'chirish
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 py-4 px-6">
          <p className="text-[18px] leading-[1.5] font-light">
            Biz sizga tasdiqlovchi xabar yuboramiz. Iltimos mobil aloqa
            raqamingizni (kiritilishi majburiy) va elektron manzilingizni
            (ixtiyoriy) kiriting
          </p>
          {[
            "firstName",
            "surName",
            "birthDate",
            "email",
            "countryCode",
            "phoneNumber",
          ].map((field, index) => (
            <div key={index} className="relative">
              <label className={getLabelClass(field)}>
                {field === "firstName"
                  ? "Ism"
                  : field === "surName"
                  ? "Familiya"
                  : field === "birthDate"
                  ? "Tug'ilgan sanasi"
                  : field === "email"
                  ? "Elektron pochta"
                  : field === "countryCode"
                  ? "Davlat kod"
                  : "Telefon raqami"}
              </label>
              <input
                type={field === "birthDate" ? "date" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                onFocus={() => handleFocus(field)}
                onBlur={() => handleBlur(field)}
                placeholder=""
                className={getInputClass(field)}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
          <div className="py-5">
            <small>Meni quyidagicha xabardor qiling:</small>
            <div className="flex items-center mt-4">
              <label className="flex items-center cursor-pointer relative text-base mr-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 mr-1 cursor-pointer transition-all shadow hover:shadow-md"
                  required
                />
                Mobil telefon raqam
              </label>
              <label className="flex items-center cursor-pointer relative text-base">
                <input
                  type="checkbox"
                  className="h-4 w-4 mr-1 cursor-pointer transition-all shadow hover:shadow-md"
                />
                Elektron pochta
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <input
              className={`mr-1 w-4 h-4 cursor-pointer transition-all shadow hover:shadow-md ${
                errors.licence ? "border border-solid border-red-500" : ""
              }`}
              type="checkbox"
              name="licence"
              id="licence"
              onChange={handleLicenceCheck}
              checked={isLicenceChecked}
            />
            <p
              className={`text-base cursor-pointer ${
                errors.licence ? "text-red-500" : "text-[#212529]"
              }`}
              onClick={openModal}
            >
              Men{" "}
              <a className="text-[#2A5BB4] underline" href="#">
                Foydalanish shartlari
              </a>{" "}
              bilan tanishdim{" "}
            </p>
          </div>
          {errors.licence && (
            <p className="licence-text text-red-500 text-sm -mt-3">
              {errors.licence}
            </p>
          )}
          {isOpen ? <LicenceModal closeModal={closeModal} /> : ""}
          <button
            type="submit"
            className="btn bg-[#018E7B] text-white px-16 py-5 uppercase rounded-sm outline outline-1 outline-[#018e7b] transition-all duration-[0.3s] hover:bg-[#360012] hover:outline-[#360012]"
          >
            Qabulga yozilish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
