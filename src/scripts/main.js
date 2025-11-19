// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", "3lbs", "3in")
let vase = makePottery("vase", "8lbs", "10in")
let bowl = makePottery("bowl", "5lbs", "4in")
let glass = makePottery("glass", "4lbs", "6in")
let figurine = makePottery("figurine", "5lbs", "7in")


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000)
let firedVase = firePottery(vase, 3000)
let firedBowl = firePottery(bowl, 2100)
let firedGlass = firePottery(glass, 1900)
let firedFigurine = firePottery(figurine, 2200)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

