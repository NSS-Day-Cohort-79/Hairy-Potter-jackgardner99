export const PotteryList = (toSell) => {
  let potteryHTML = ""

  for (const sell of toSell) {
    potteryHTML += `<section class="pottery" id="pottery--1">
     <h2 class="pottery__shape">${sell.shape}</h2>
     <div class="pottery__properties">
       Item weighs ${sell.weight} grams and is ${sell.height} cm in height
     </div>
     <div class="pottery__price">Price is $${sell.price}</div>
   </section>`
  }

  return potteryHTML
}