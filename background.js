chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    filters: {
      keywords: [],
      location: "",
      jobType: ""
    },
    appliedJobs: []
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "JOB_FOUND") {
    sendToAPI("/jobs/extract", msg.payload);
  }

  if (msg.type === "JOB_APPLY") {
    saveAppliedJob(msg.payload);
    sendToAPI("/applications/apply", msg.payload);
  }
});

function saveAppliedJob(job) {
  chrome.storage.local.get(["appliedJobs"], data => {
    const updated = [...data.appliedJobs, job];
    chrome.storage.local.set({ appliedJobs: updated });
  });
}

function sendToAPI(endpoint, payload) {
  fetch(`http://localhost:4000/api${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
}
