import express from "express";
import blogRouter from "./routes/blogRoutes.js";

const app = express();
const PORT = 8000;

// app.use(cors());
app.use(express.json());

app.use("/posts", blogRouter);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
