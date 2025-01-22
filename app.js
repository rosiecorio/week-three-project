const clicker = document.getElementById('clicker')
const cookieCount = document.getElementById('cookieCount')
const shopDiv = document.getElementById('shopDiv')
let cps = document.getElementById('perSec')
const autoClicker = document.getElementById(displayAutoClicker)

//adds 1 cookie for every click
clicker.addEventListener('click', handleClick)
let currentCount = 1;

function handleClick() {
    cookieCount.innerText = currentCount++
}

//fetching shop data

async function fetchShopData() {
    const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
    const data = await response.json()
    generateAutoClicker(data)
}

function generateAutoClicker(data) {
    displayAutoClicker.innerHTML = ''
    console.log(data)
    displayAutoClicker.innerText = data
}