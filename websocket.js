import { Server } from "socket.io";

export function initWebSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", socket => {
    console.log("📡 Dashboard connected");

    socket.on("JOB_APPLIED", job => {
      io.emit("UPDATE", job);
    });

    socket.on("disconnect", () => {
      console.log("❌ Dashboard disconnected");
    });
  });
}
