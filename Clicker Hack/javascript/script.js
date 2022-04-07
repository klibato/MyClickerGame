var data = 0
let datapersecond = 0
let datatest = 1
var upgrades = [
    { id: 0, name: "Computer", cost: 1, datapersecond: 0.3, owned: 0 },
    { id: 1, name: "Rig", cost: 2, datapersecond: 0.6, owned: 0 },
    { id: 2, name: "Server", cost: 5, datapersecond: 1.2, owned: 0 }
];


display()
add_dts()
display_upgrades()

function add_data(x) {
    data += x;
}


function getdts(id) {
    if (data >= upgrades[id].cost) {
        data -= upgrades[id].cost
        upgrades[id].owned += 1
        datapersecond = datapersecond + upgrades[id].datapersecond
        upgrades[id].cost = Math.round((upgrades[id].cost * 1.15) * 10) / 10;
        display_upgrades()
    }
}

function add_dts() {
    setInterval(function() {
        data += datapersecond;
        console.log(datapersecond);
    }, 1000)
}

function display() {
    setInterval(function() {
        document.getElementById('data').innerHTML = "You have" + " " + Math.round(data * 10) / 10 + " " + "data";
        document.getElementById('dts').innerHTML = "You" + " " + "produced" + " " + Math.round(datapersecond * 10) / 10 + " " + "data"
    }, );
}

function display_upgrades() {
    document.getElementById('name').innerHTML = upgrades[0].owned + " " + upgrades[0].name
    document.getElementById('price').innerHTML = "pirice" + " " + upgrades[0].cost + " " + "data"
    document.getElementById('name1').innerHTML = upgrades[1].owned + " " + upgrades[1].name
    document.getElementById('price1').innerHTML = "pirice" + " " + upgrades[1].cost + " " + "data"
    document.getElementById('name2').innerHTML = upgrades[2].owned + " " + upgrades[2].name
    document.getElementById('price2').innerHTML = "pirice" + " " + upgrades[2].cost + " " + "data"
}