let canvas;

function make_canvas(n) {
    canvas = [];
    for (let i = 0; i < n; i++) {
        canvas[i] = [];
        for (let j = 0; j < n; j++) {
            canvas[i][j] = {
                r: 255,
                g: 255,
                b: 255
            }
        }
    }
}

function update_canvas(row, col, new_r, new_g, new_b) {
    canvas[row][col] = {
        r: new_r,
        g: new_g,
        b: new_b
    }
}

make_canvas(5);

const express = require("express");
const app = express();
const port = 3000;

console.log(__dirname);
let path = require("path");
console.log(path.join("GOSHO", "PESHO"))
console.log(path.join(__dirname, "/public/start.html"))

app.get("/", function (req, res) {
    console.log("poluchih get request");
    res.status(200);
    res.contentType("text/html")
    res.sendFile(path.join(__dirname, "/public/start.html"))
});

app.get("/game.js", function (req, res) {
    console.log("poluchih get request");
    res.status(200);
    res.sendFile(path.join(__dirname, "/public/game.js"))
});

app.get("/map", function (req, res) {
    console.log(JSON.stringify(canvas));
    res.status(200);
    res.send(JSON.stringify(canvas))
})

app.delete("/map", function (req, res) {
    let pass = parseInt(req.query.PASSWORD)
    if (!isNaN(pass) && pass == "1234") {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                update_canvas(i, j, 0, 0, 0)
            }
        }
        res.status(200)
        res.send("deleted successfully")
        return;
    }
})

app.put("/risuvai", function (req, res) {
    let X = parseInt(req.query.X),
        Y = parseInt(req.query.Y),
        R = parseInt(req.query.R),
        G = parseInt(req.query.G),
        B = parseInt(req.query.B);

    update_canvas(X, Y, R, G, B);
    res.status(200);
    res.send("uspeshno risuvane")
    console.log("updatena gi")
})


app.listen(port, function () {
    console.log("server is listening on port:" + port)
})

let a = JSON.stringify([1, 2, 3])
let b = JSON.parse(['{"r": 100, "g": 100, "b": 100}']);