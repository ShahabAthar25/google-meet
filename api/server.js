import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import auth from "./middlewares/auth.js";
import getUser from "./middlewares/getUser.js";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 5000;

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(auth);
app.use(getUser);

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit(`User ${socket.id} has left the call`);
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("calluser", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
