let items = [""];
const itemsDiv = document.getElementById("items")
const inputItem = document.getElementById("itemText")
const storageKey = "items"
console.log(inputItem)

function rednerItems(){
    itemsDiv.innerHTML = null;
    for(const[idx,item] of Object.entries(items)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item
        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }

}
function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems)
    rednerItems();
}
function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey,stringItems)

}

function addItem() {
    const value = inputItem.value;
    if(!value){
        alert("Please enter valid item")
    }
    items.push(value)
    rednerItems()
    inputItem.value = "";
    saveItems();
}

function removeItem(idx){
    items.splice(idx,1)
    rednerItems()
    saveItems();
}

document.addEventListener("DOMContentLoaded",loadItems)

