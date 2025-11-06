const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/check", (req, res) => {
  const competitor = (req.body && req.body.competitor) || "";
  res.send(`Конкурент: ${competitor}<br>Демо проверка завършена.`);
});

app.get("/health", (_req, res) => res.send("OK"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("AdCompass (Node) listening on " + PORT));
