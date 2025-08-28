let hearts = 0;
let coins = 100;
historyData = [];

function getElement(id) {
    return document.getElementById(id);
}

function setText(id,value) {
    getElement(id).textContent = value;
}

function updateCounters() {
    setText("heart-count",hearts);
    setText("coin-count",coins);
}

function
