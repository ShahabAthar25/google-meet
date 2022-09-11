import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import auth from "./middlewares/auth.js";
import getUser from "./middlewares/getUser.js";

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(getUser);
app.use(auth);

app.get("/protected", (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
