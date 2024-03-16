import { useEffect, useState } from "react";
import Select from "react-select";

function Admin() {
  const [adminSummary, setAdminSummary] = useState([]);

  async function fetchAdminSummary() {
    const res = await fetch("http://127.0.0.1:5000/admin-summary");
    const data = await res.json();
    setAdminSummary(data);
  }

  useEffect(() => {
    fetchAdminSummary();
  }, []);

  const options = [
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Bi-weekly", label: "Bi-weekly" },
    { value: "Monthly", label: "Monthly" },
    { value: "By-monthly", label: "By-monthly" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-3 mt-[100px] mx-10 items-start">
        <div className="flex w-full justify-between">
          <h1 className="font-bold text-2xl">Admin</h1>
          <Select
            className="rounded-sm pl-1"
            options={options}
            isSearchable={false}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "#A19BD3",
              }),
              placeholder: (baseStyles) => ({
                ...baseStyles,
                color: "white",
              }),
              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                color: "white",
              }),
              singleValue: (baseStyles) => ({
                ...baseStyles,
                color: "white",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "#A19BD3",
              }),
              option: (baseStyles, { isFocused, isSelected }) => ({
                ...baseStyles,
                backgroundColor: isSelected
                  ? "#6359BC"
                  : isFocused
                  ? "#7C74C2"
                  : null,
                "&:hover": {
                  backgroundColor: "#7C74C2",
                },
              }),
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          {adminSummary ? (
            adminSummary.map((summary, index) => (
              <div
                key={index}
                className="w-full bg-[#6359BC] p-5 flex flex-col gap-3 rounded"
              >
                <div className="flex justify-between">
                  <p className="text-lg">{summary.name}</p>
                  <p className="text-lg">{summary.urgency}</p>
                </div>
                <p className="text-lg italic">{summary.time}</p>
                <p className="text-lg">{summary.summary}</p>
              </div>
            ))
          ) : (
            <p className="text-lg">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
