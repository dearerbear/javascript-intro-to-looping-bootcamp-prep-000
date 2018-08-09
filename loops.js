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
  i=0;
  for (let i=0;  i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
  return array
}

console.log(forLoop())
