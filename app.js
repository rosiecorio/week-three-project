const clicker = document.getElementById('clicker')
const cookieCount = document.getElementById('cookieCount')
const shopDiv = document.getElementById('shopDiv')
let cps = document.getElementById('perSec')
const autoClicker = document.getElementById('displayAutoClicker')
const buyClicker = document.getElementById('buyClicker')


//adds 1 cookie for every click
clicker.addEventListener('click', handleClick)

let currentCount = localStorage.getItem('count') || 0;
cookieCount.textContent = currentCount

function handleClick() {
    currentCount++
    cookieCount.textContent = currentCount
    localStorage.setItem('count', currentCount)
}

//fetching shop data

async function fetchShopData() {
    const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
    const data = await response.json()
    generateAutoClicker(data)
}

function generateAutoClicker(data) {
    autoClicker.innerHTML = ''
    console.log(data)
    autoClicker.innerText = data
}

//you cannot afford this notification


//also need to store cps value in local storage
//same as cookie count


//could potentially store cookie count and cps
//in an object then target them to get their
//value.


//stringify, set item, getitem, parse will store
//and retrieve object.


//create purchases array that shows how many of each
//item has been bought (also stored in local)


//make sure things that need to be global variables
//are in teh scope