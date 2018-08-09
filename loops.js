// var gifts = []'teddy bear', 'drone', 'doll'];
//
// function wrapGift(gift) {
//   console.log(`Wrapped ${gift} and added a bow!`)
// }
//
// for( ; ; ){
//
// }

function forLoop(array) {
  array = []
  i=11;
  for (let i=-11;  i < 24; i++) {
    array.push(`I am ${i+1} strange loop${i === 0 ? '' : 's'}.`)
  }
  return array
}

console.log(forLoop())
