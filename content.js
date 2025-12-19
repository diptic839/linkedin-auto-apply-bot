function getJobText() {
  const el = document.querySelector(".job-desc");
  return el ? el.innerText : "";
}

chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
  if (msg.type === "SCAN_JOB") {
    sendResponse({ text: getJobText() });
  }

  if (msg.type === "APPLY_DEMO") {
    const btn = document.querySelector(".easy-apply");
    if (btn) btn.innerText = "Applied ✔";
  }
});
