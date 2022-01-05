const express = require("express");
const app = express();
const PORT = process.env.PORT || 8877;
const arq = require("./pokemons.json");
let find = false

app.get("/status", (req, res) => {
    res.json({
        msg: "ok",
    });
});

app.get("/pokemons", (req, res) => {
    const id = req.query.id;

    if (typeof id === "undefined") {
        res.json(arq);
    }
    else {

        let pokemons = arq.pokemon
        for (let i in pokemons) {

            if (pokemons[i].id == id) {
                res.json(pokemons[i]);
                find = true
            }
        }

        if (find === false) {
            res.json({
                msg: "erro",
            });
        }

    }

});

app.listen(PORT, () => {
    console.log("escutando porta : " + PORT);
});
