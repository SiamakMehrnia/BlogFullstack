import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
const PORT = 8000;

app.use(cors()); // Cross Origin Ressource Sharing

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
