require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // allow cross-origin requests (customize in production)

// Route to serve secrets
app.get("/config", (req, res) => {
  res.json({
    apiKey: process.env.API_KEY,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    tmdbToken: process.env.TMDB_TOKEN,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Config server running on port ${PORT}`);
});
