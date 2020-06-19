const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
    // READ Notes
    // console.log("READ Notes");

    store.getNotes().then( (notes) => {
        res.json(notes);
    });

});

router.post("/notes", (req, res) => {

    store.addNote(req.body).then( (notes) => {
        res.json(notes);
    });


    // fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {

    //     const data = res.json( JSON.parse(data) );

    // });


    // console.log("CREATE Notes");
});

router.delete("/notes/:id", (req, res) => {
    // TBD

    console.log("DELETE Notes");
});

module.exports = router;