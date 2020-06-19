const fs = require("fs");
const path = require("path");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

class Store {

    read() {
        return readFileAsync(path.join(__dirname, "../db/db.json"), "utf8");

    }

    getNotes() {
        return this.read().then( (data) => {

            return data
                ? JSON.parse(data)
                : [];

        });
    
    }

    addNote() {

        return this.getNotes().then( (notes) => {
        
            console.log("Current items");
            console.log(notes);
    
            console.log( "New item to add" );
            console.log( req.body );
    
            res.end();
    
        });
    
    }

    deleteNote() {

    }
}

module.exports = new Store;