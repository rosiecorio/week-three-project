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