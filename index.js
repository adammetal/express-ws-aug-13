import url from "node:url";
import path from "node:path";
import express from "express";
import morgan from "morgan";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));

app.get("/api/movies/:id/:asd", (req, res) => {
  console.log(req.query);
  res.send(req.params.id + req.params.asd);
});

app.get("/api/movies", (req, res) => {});

app.get("/hello", (req, res) => {
  res.send("hello");
});

const port = 8080;

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
