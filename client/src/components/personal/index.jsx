import { useState } from "react";

function Personal() {
  const [name, setName] = useState("Mariam");
  const [age, setAge] = useState(62);
  const [gender, setGender] = useState("Female");
  const [symptoms, setSymptoms] = useState("Fever, Cough");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-3 mt-[100px] mx-10 items-start">
        <h1 className="font-bold text-2xl">Personal</h1>
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

export default Personal;
