import React, { useEffect, useState } from "react";
import axios from "axios";

const Districts = ({ region, regionId, selected, handleSelect, STEPS }) => {
  const [items, setItems] = useState([]); // Branches

  const getFunction = () => {
    axios
      .get(
        `https://my.adliya.uz/api/application/v1/application/queue/branches/${regionId}`
      )
      .then((res) => {
        setItems(res?.data?.data);
      })
      .catch((err) => console.error("API request failed: ", err));
  };

  useEffect(() => {
    if (regionId) {
      getFunction();
    }
  }, [regionId]);

  return (
    <section>
      {regionId === region.id &&
        items &&
        items.map((district) => (
          <label
            className={`flex items-center px-6 py-3 text-[16px] bg-[#fafafa] mb-1 border border-solid border-[#ccc] cursor-default ${
              selected.regionsId === district.id
                ? "font-medium"
                : "text-[#212529]"
            }`}
            key={district.id}
            onClick={() =>
              handleSelect("regionsId", district.id, STEPS.SERVICE)
            }
          >
            <input
              className="mr-2"
              type="checkbox"
              checked={selected.regionsId === district.id}
              name="district"
              id={`district-${district.id}`}
              onChange={() =>
                handleSelect("regionsId", district.id, STEPS.SERVICE)
              }
            />
            {district?.address}
          </label>
        ))}
    </section>
  );
};

export default Districts;
