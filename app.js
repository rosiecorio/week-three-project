const clicker = document.getElementById('clicker')
const cookieCount = document.getElementById('cookieCount')
const shopDiv = document.getElementById('shopDiv')
const perSec = document.getElementById('perSec')
const autoClicker = document.getElementById('displayAutoClicker')
const buyClicker = document.getElementById('buyClicker')

let currentCount = parseInt(localStorage.getItem('count')) || 0;
let cps = parseInt(localStorage.getItem('cps')) || 1;
perSec.textContent = cps

clicker.addEventListener('click', handleClick)

function handleClick() {
    currentCount++
    updateCurrentCount()
}

function updateCurrentCount() {
    cookieCount.textContent = currentCount
    perSec.textContent = cps
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
        increaseElem.setAttribute('hidden', '')

        buyButton.addEventListener('click', function () {
               if (currentCount > dataToRender[i].cost) {
                    cps += dataToRender[i].increase
                    currentCount -= dataToRender[i].cost
                    console.log(cps)
                    updateCurrentCount()
                    saveStorage()
                    } else if (currentCount < dataToRender[i].cost) {
                    alert("👿 You do not have enough cookies! The cookie gods are angry. 👿")
                }          
            }
        )         
    }
}

//every time an item is successfully bought, add 1
//to the value of the upgrades variable in local
//storage.

//you cannot afford this notification

//stringify, set item, getitem, parse will store
//and retrieve object.

//create purchases array that shows how many of each
//item has been bought (also stored in local)

//let purchases = []

//make sure things that need to be global variables
//are in teh scope

//(for each) element in the api array 
