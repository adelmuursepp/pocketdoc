import { useEffect, useState } from "react";

function Dashboard() {
  const [recommendations, setRecommendations] = useState([]);

  async function fetchRecommendations() {
    const res = await fetch("http://127.0.0.1:5000/recommended-actions");
    const data = await res.json();
    const stepsRegex = /\d+\.\s/g;
    const steps = data.recommendations.split(stepsRegex);
    steps.shift();
    setRecommendations(steps);
  }

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-3 mt-[100px] mx-10 items-start">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <div className="flex flex-col gap-5 mb-5">
          {recommendations ? (
            recommendations.map((step, index) => (
              <div key={index} className="bg-[#6359BC] p-2 rounded">
                <p className="text-lg">{step}</p>
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

export default Dashboard;
