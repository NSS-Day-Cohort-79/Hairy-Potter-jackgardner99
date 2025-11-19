// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 3)
let vase = makePottery("vase", 8, 10)
let bowl = makePottery("bowl", 5, 4)
let glass = makePottery("glass", 4, 6)
let figurine = makePottery("figurine", 5, 7)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000)
let firedVase = firePottery(vase, 3000)
let firedBowl = firePottery(bowl, 2100)
let firedGlass = firePottery(glass, 1900)
let firedFigurine = firePottery(figurine, 2200)

// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(firedMug)
let sellVase = toSellOrNotToSell(firedVase)
let sellBowl = toSellOrNotToSell(firedBowl)
let sellGlass = toSellOrNotToSell(firedGlass)
let sellFigurine = toSellOrNotToSell(firedFigurine)


// Invoke the component function that renders the HTML list

