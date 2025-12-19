const applyJob = async (job) => {
  const company = "Demo Corp"; // Or get from job object

  const response = await fetch("http://localhost:4000/api/applications/apply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: job.title, company })
  });

  const data = await response.json();
  console.log(data.message);
};

const matchJob = async (job, resume) => {
  const response = await fetch("http://localhost:4000/api/jobs/match", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ job, resume })
  });

  const data = await response.json();
  console.log(`Match for ${job.title}: ${data.matchPercentage}%`);
  return data.matchPercentage;
};
