const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "views/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

// API routes

app.get("/api/notes", (req, res) => {
    // TBD
});

app.post("/api/notes", (req, res) => {
    // TBD
});

app.delete("/api/notes/:id", (req, res) => {
    // TBD
});

// Listener
app.listen( PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});