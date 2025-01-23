const clicker = document.getElementById('clicker')
const cookieCount = document.getElementById('cookieCount')
const shopDiv = document.getElementById('shopDiv')
const perSec = document.getElementById('perSec')
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

//need to store value as number
let cps = 1
perSec.textContent = cps
//add cps interval function
cpsInterval = setInterval(() => {
    currentCount = parseInt(currentCount) + cps;
    cookieCount.textContent = currentCount;
    localStorage.setItem('cps', cps)
}, 1000)

//fetching shop data

/*async function fetchShopData() {
    const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
    const data = await response.json()
    console.log(data)
    generateAutoClicker(data)
}

function generateAutoClicker(dataToRender) {
    console.log(dataToRender)
    for (let i = 0; i < dataToRender.length; i++) {
        const containerElem = document.createElement('div');
        //const contentElem = create element for content in div
        
        //e.g. titleElem.innerText = dataToRender[i]title
        //give me title from current i value in array
        //titleElem.setAttribute('class', 'shopItem')
        //containerElem.appendchild.titleElem
        //document.body.appendchild.containerElem
        
        //we attach elements to the div, then the div to the page 
        //or shop div.
    }
}

/*function generateAutoClicker(data_to_render) {
    autoClicker.innerHTML = ''
    console.log(data_to_render)
    autoClicker.innerText = data
}*/

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

//for each element in the api array 


//liams example of event listener for shop upgrades
//if (item.cost >upgrade) {
   // alert("You need more cookies");
    //return;

/*if (cookies < item.cost) {
    alert (cant buy)
} else {cps += item.cps
    cookies -= item.cost
}
    update content 
*/ 