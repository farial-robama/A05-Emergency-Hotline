

let hearts = 0;
let coins = 100;
let copyCount = 0;
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
    setText("copy-count",copyCount);
}

function addHistory(name,number){
    const data = {
        name : name,
        number : number,
        time : new Date().toLocaleTimeString()
    };
    historyData.unshift(data);
    renderHistory();
}

function renderHistory() {
    const historyList = getElement("history-list");
    historyList.innerHTML = "";

    for (const item of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card bg-[#FAFAFA] card-xs shadow-sm flex flex-row gap-4 items-center px-3 py-2 mt-3">
           <div class="card-body flex flex-col">
                <h2 class="card-title">${item.name}</h2>
                <p>${item.number}</p>
            </div>
            <p class="whitespace-nowrap">${item.time}</p>
        </div>`

        historyList.appendChild(div)
    }
}

// heart-btn
document.querySelectorAll(".heart-btn").forEach((btn) => {
    btn.addEventListener("click",function() {
        hearts++;
        updateCounters();
    })
});

// call-btn
document.querySelectorAll(".heart-btn").forEach((btn) => {
    btn.addEventListener("click",function() {
        const card = btn.parentElement.parentElement.parentElement;
        const name = card.dataset.serviceName;
        const number = card.dataset.serviceNumber;
        
        if (coins < 20) {
        alert("Not enough coins!");
        return
    }
    coins -= 20;
    updateCounters();
    alert(`Calling ${name} (${number})`);
    addHistory(name, number);

    });
});

// clear-history-btn
document.getElementById("clear-history-btn").addEventListener("click",function(){
    historyData.length = 0;
    renderHistory()
})
updateCounters();

// copy-btn
document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        const card = btn.parentElement.parentElement.parentElement;
        const number = card.dataset.serviceNumber;

        navigator.clipboard.writeText(number).then(() => {
            alert(`Copied hotline number: ${number}`);
            copyCount++;
            updateCounters();
        }).catch((err) => {
            console.error("Failed to copy: ", err);
            
        });
    })
});


