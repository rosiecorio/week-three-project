const clicker = document.getElementById('clicker')
const cookieCount = document.getElementById('cookieCount')
const shopDiv = document.getElementById('shopDiv')
const perSec = document.getElementById('perSec')
const autoClicker = document.getElementById('displayAutoClicker')
const buyClicker = document.getElementById('buyClicker')


//adds 1 cookie for every click
clicker.addEventListener('click', handleClick)

let currentCount = parseInt(localStorage.getItem('count')) || 0;
let cps = parseInt(localStorage.getItem('cps')) || 1;
perSec.textContent = cps

function handleClick() {
    currentCount++
    updateCurrentCount()
}

function updateCurrentCount() {
    cookieCount.textContent = currentCount
    cps.textContent = cps
}

function saveStorage() {
    localStorage.setItem('count', currentCount)
    localStorage.setItem('cps', cps)
}
//need to store value as number

setInterval(() => {
    currentCount = (currentCount) + cps;
    updateCurrentCount()
    localStorage.setItem('count', currentCount)
}, 1000)

//fetching shop data

async function fetchShopData() {
    const response = await fetch('https://cookie-upgrade-api.vercel.app/api/upgrades')
    const data = await response.json()
    generateShopItem(data)
}

fetchShopData()

function generateShopItem(dataToRender) {
    for (let i = 0; i < dataToRender.length; i++) {
        const containerElem = document.createElement('div');
        containerElem.setAttribute('class', 'shopItem')
        const nameElem = document.createElement('p')
        const costElem = document.createElement('p')
        const increaseElem = document.createElement('p')
        const buyButton = document.createElement('button')

        nameElem.innerText = dataToRender[i].name
        costElem.innerText = dataToRender[i].cost
        increaseElem.innerText = dataToRender[i].increase
        buyButton.innerText = 'Buy!'

        containerElem.appendChild(buyButton)
        containerElem.appendChild(nameElem)
        containerElem.appendChild(costElem)
        containerElem.appendChild(increaseElem)
        shopDiv.appendChild(containerElem)

        containerElem.setAttribute('class', 'shopItem')
        buyButton.setAttribute('id', 'buyItemButton')
        //increaseElem.setAttribute('hidden', '')

        buyButton.addEventListener('click', buyItem)
    
        //write function for buying items from shop

        let cost = parseInt(costElem)
        let increaseCps = parseInt(increaseElem)

        function buyItem(item) {
            if (currentCount > item.costElem) {
            cps += item.increaseElem
            currentCount -= item.costElem
            }
        }
    }
}


//you cannot afford this notification

//could potentially store cookie count and cps
//in an object then target them to get their
//value.

//stringify, set item, getitem, parse will store
//and retrieve object.

//create purchases array that shows how many of each
//item has been bought (also stored in local)

//let purchases = []

//make sure things that need to be global variables
//are in teh scope

//(for each) element in the api array 


//liams example of event listener for shop upgrades
//if (item.cost >upgrade) {
   // alert("You need more cookies");
    //return;

/* sams example

if (cookies < item.cost) {
    alert (cant buy)
} else {cps += item.cps
    cookies -= item.cost
}
    update content 
*/ 