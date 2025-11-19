const primaryKey = 1
let id = 1

export const makePottery = (shape, weight, height) => {
   
   return {
      shape: `${shape}`,
      weight: `${weight}`,
      height: `${height}`,
      id: id++
   }
}