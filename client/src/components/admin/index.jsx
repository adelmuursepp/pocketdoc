import { useState } from "react";
import Select from "react-select";

function Admin() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("Male");
  const [symptoms, setSymptoms] = useState("Fever, Cough");

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
        <div className="w-full bg-[#6359BC] p-5 flex flex-col gap-3 rounded">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              className="bg-[#A19BD3] rounded-sm pl-1"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="text-lg">
              Age
            </label>
            <input
              className="bg-[#A19BD3] rounded-sm pl-1"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-lg">
              Gender
            </label>
            <input
              className="bg-[#A19BD3] rounded-sm pl-1"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="symptoms" className="text-lg">
              Symptoms
            </label>
            <input
              className="bg-[#A19BD3] rounded-sm pl-1"
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
