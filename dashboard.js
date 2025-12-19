const socket = io("http://localhost:4000");
const jobLog = document.getElementById("jobLog");

socket.on("statusUpdate", data => {
  const tr = document.createElement("tr");
  const time = new Date().toLocaleTimeString();
  tr.innerHTML = `
    <td>${data.title || "N/A"}</td>
    <td>${data.location || "N/A"}</td>
    <td>${data.match || "N/A"}%</td>
    <td>${time}</td>
  `;
  jobLog.appendChild(tr);
});
