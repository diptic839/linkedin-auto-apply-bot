const express = require("express");
const http = require("http");
const { initSocket } = require("./websocket");

const app = express();
const server = http.createServer(app);
const io = initSocket(server);

app.use(express.json());

// Health check
app.get("/", (req, res) => res.send("Backend running"));

// API: Apply to a job
app.post("/api/applications/apply", (req, res) => {
  const { title, company } = req.body;
  if(!title || !company) return res.status(400).json({ error: "Missing title or company" });

  // Emit to dashboard via WebSocket
  io.emit("statusUpdate", { title, company, time: new Date().toLocaleTimeString() });

  res.json({ success: true, message: `${title} applied at ${company}` });
});

// API: Match jobs for a resume
app.post("/api/jobs/match", (req, res) => {
  const { job, resume } = req.body;
  if(!job || !resume) return res.status(400).json({ error: "Missing job or resume data" });

  // Simple skill matching (for demo)
  const requiredSkills = job.skills || [];
  const userSkills = resume.skills || [];
  let matchCount = 0;
  requiredSkills.forEach(skill => {
    if(userSkills.includes(skill)) matchCount++;
  });

  const matchPercentage = Math.round((matchCount / requiredSkills.length) * 100);

  res.json({ matchPercentage });
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
