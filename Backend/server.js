import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
const PORT = 8000;
const { Client } = pg;

app.use(cors()); // Cross Origin Ressource Sharing

app.get("/posts", async (req, res) => {
  try {
    const client = new Client({
      connectionString: process.env.PG_URI,
    });
    await client.connect();
    const results = await client.query("SELECT * FROM posts");
    await client.end();
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).send(`Error fetching posts: ${error}`);
  }
});

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
