const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Listener
app.listen( PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});