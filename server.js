const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ✅ Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Test endpoint to check env vars
app.get("/api/env-check", (req, res) => {
  res.json({
    githubClientId: process.env.GITHUB_CLIENT_ID ? "✔️ Set" : "❌ Missing",
    supabaseUrl: process.env.SUPABASE_URL ? "✔️ Set" : "❌ Missing",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
