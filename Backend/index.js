const express = require("express");

const app = express();
const PORT = 3000;


app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
app.post("/n8n-trigger", (req, res) => {
  console.log("Request received from n8n");
  console.log("Body:", req.body);

  res.json({
    status: "received",
    source: "n8n",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
