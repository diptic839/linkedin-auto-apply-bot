let jobs = [];
let applications = [];

/* ---------------- JOBS ---------------- */
export function saveJob(job) {
  jobs.push({ ...job, createdAt: new Date().toISOString() });
}

/* ---------------- APPLICATIONS ---------------- */
export function saveApplication(job) {
  applications.push(job);
}

export function getApplications() {
  return applications;
}

/* ---------------- STATS ---------------- */
export function getStats() {
  const today = new Date().toDateString();

  return {
    totalJobsExtracted: jobs.length,
    totalApplied: applications.length,
    appliedToday: applications.filter(
      j => new Date(j.appliedAt).toDateString() === today
    ).length
  };
}

/* ---------------- MATCHING LOGIC ---------------- */
export function matchJob(job, resume) {
  let score = 0;

  if (!job?.description || !resume?.skills) return 0;

  resume.skills.forEach(skill => {
    if (job.description.toLowerCase().includes(skill.toLowerCase())) {
      score += 10;
    }
  });

  return score;
}
