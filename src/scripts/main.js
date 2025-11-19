// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { potteryToSell } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, 3)
let vase = makePottery("Vase", 8, 10)
let bowl = makePottery("Bowl", 5, 4)
let glass = makePottery("Glass", 4, 6)
let figurine = makePottery("Figurine", 5, 7)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000)
let firedVase = firePottery(vase, 3000)
let firedBowl = firePottery(bowl, 2100)
let firedGlass = firePottery(glass, 1900)
let firedFigurine = firePottery(figurine, 2200)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedGlass)
toSellOrNotToSell(firedFigurine)


// Invoke the component function that renders the HTML list
let sellPotteryHTML = PotteryList(potteryToSell)

document.querySelector(".potteryList").innerHTML = sellPotteryHTML
