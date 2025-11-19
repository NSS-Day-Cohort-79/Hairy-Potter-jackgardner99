

export const firePottery = (obj, number) => {
   obj.fired = true

   if (number > 2200) {
     obj.cracked = true
   } else if (number <= 2200){
     obj.cracked = false
   }
  return obj
}