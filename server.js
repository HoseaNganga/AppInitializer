require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions)); // allow cross-origin requests (customize in production)

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
