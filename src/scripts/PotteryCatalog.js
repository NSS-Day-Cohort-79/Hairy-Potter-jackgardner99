let potteryToSell = []

export const toSellOrNotToSell = (potteryObj) => {
   if (potteryObj.weight >= 6) {
     potteryObj.price = 40
   } else if (potteryObj.weight < 6) {
     potteryObj.price = 20
   }

   if (potteryObj.cracked === true) {
    delete potteryObj.price
   } else {
     potteryToSell.push(potteryObj)
   }

   return potteryObj
}