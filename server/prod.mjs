import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT) || 8080;
const distPath = path.join(__dirname, "..", "dist");

app.get("/healthz", (_req, res) => {
  res.type("text/plain").send("ok");
});

app.use(
  express.static(distPath, {
    index: "index.html",
    maxAge: "1d",
  }),
);

app.get("/{*splat}", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on http://0.0.0.0:${port}`);
});
