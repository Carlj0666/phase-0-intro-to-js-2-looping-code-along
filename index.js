// Code your solutions in this file

function writeCards(array, event){
  let giftCards = []
  for (let i = 0; i < array.length; i++) {
    giftCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
  return giftCards;
}

writeCards();

function countDown(currentCount){
  while(currentCount > 0) {
  console.log(currentCount);
  currentCount -= 1;
  }
  console.log(currentCount);
}