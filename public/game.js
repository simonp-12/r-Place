let board, map, kletkaShir;

function init() {

}

function onMapLoad(obj) {
    console.log(obj.currentTarget.responseText);
    console.log(JSON.parse(currentTarget.responseText));
    map = JSON.parse(currentTarget.responseText);
}

function getMap() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", onMapLoad);
    xmlhttp.open("GET", "/map");
    xmlhttp.send();
}
function putRisuvai(x, y, r, g, b) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", getMap);
    xmlhttp.open("PUT", "/risuvai?X=" + x + "&Y=" + y + "&R=" + r + "&G=" + g + "&B=" + b)
    xmlhttp.send();
}

function update() {
    
}

function draw() {
    for (let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[i].length; j++) {
            let kletkaShir = 600/map.length;
            context.fillStyle = "rgb(" + map[i][j].r + "," + map[i][j].g + "," + map[i][j].b + ")";
            context.fillRect(i*kletkaShir, j*kletkaShir, kletkaShir, kletkaShir)
        }
    }
}

function mouseup() {
    putRisuvai(mouseX/kletkaShir, mouseY/kletkaShir, 255, 0, 0)
}