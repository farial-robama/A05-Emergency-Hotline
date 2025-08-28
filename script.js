
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

function addHistory(name,number){
    const data = {
        name : name,
        number : number,
        time : new Date().toLocaleTimeString
    }
    historyData.unshift(data);
    renderHistory();
}

function renderHistory() {
    const historyList = getElement("history-list");
    historyList.innerHTML = "";

    for (const item of historyData) {
        const div = createElement("div")
        div.innerHTML = `
        <div class="card bg-[#FAFAFA] card-xs shadow-sm flex flex-row gap-5 items-center px-3 py-2 mt-3">
           <div class="card-body flex flex-col">
                <h2 class="card-title">${data.name}</h2>
                <p>${data.number}</p>
            </div>
            <p>${data.time}</p>
        </div>`

        historyList.appendChild(div)
    }
}

document.querySelectorAll(".heart-btn").forEach((btn) => {
    btn.addEventListener("click",function () {
        hearts++;
        updateCounters(hearts);
    })
});