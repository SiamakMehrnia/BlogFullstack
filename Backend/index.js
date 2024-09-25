import express from "express";
import cors from "cors";
import blogRouter from "./routes/blogRoutes.js";

const app = express();
const PORT = 8000;

const corsOptions = {
  origin: "*", // link of frontend
  methods: "GET,PUT,POST,DELETE",
  preflightContinue: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/posts", blogRouter);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
