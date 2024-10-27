import React, { Suspense, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
const Districts = React.lazy(() => import("../districts/districts"));
import Loading from "../loading/loading";

const Regions = ({
  step,
  setStep,
  selected,
  setSelected,
  STEPS,
  handleSelect,
}) => {
  const [items, setItems] = useState([]); // Regions
  const [regionId, setRegionId] = useState();

  const getFunction = () => {
    axios
      .get(
        "https://my.adliya.uz/api/application/v1/application/queue/branches/regions"
      )
      .then((res) => setItems(res?.data?.data))
      .catch((err) => console.error("API request failed: ", err));
  };

  useEffect(() => {
    getFunction();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="accordion-item">
        <button
          className={`accordion-header ${
            step === STEPS.REGION || !!selected.regionsId
              ? "active"
              : "disabled"
          }`}
          onClick={() => {
            if (step !== STEPS.REGION) {
              setSelected({
                ...selected,
                serviceId: null,
                dateTime: null,
                contact: null,
              });
              setStep(STEPS.REGION);
            }
          }}
        >
          <span className="accordion-number">1</span> FILIALNI TANLANG
          <IoIosArrowDown
            className={`w-5 h-5 transition-transform ml-auto ${
              step === STEPS.REGION ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {step === STEPS.REGION && (
          <div className="accordion-body p-2">
            <p className="px-6 py-4 mb-1 text-[19px] text-[#212529] text-medium">
              Ro'yxatda ko'rsatilmagan filiallarda qabulga oldindan yozilib
              bo'lmaydi
            </p>
            <ul>
              {items
                ? items.map((region) => (
                    <li
                      className={regionId !== region.id ? "text-red-800" : ""}
                      key={region.id}
                    >
                      <button
                        className={`accordion-header accordion-region-header shadow-md shadow- ${
                          regionId !== region.id ? "active" : "disabled"
                        }`}
                        onClick={() => {
                          setRegionId(region.id);
                        }}
                      >
                        <span>{region.name}</span>
                        <IoIosArrowDown
                          className={`w-5 h-5 transition-transform ml-auto ${
                            regionId !== region.id ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      </button>
                      {regionId === region.id && (
                        <Districts
                          regionId={regionId}
                          region={region}
                          selected={selected}
                          handleSelect={handleSelect}
                          STEPS={STEPS}
                        />
                      )}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default Regions;
