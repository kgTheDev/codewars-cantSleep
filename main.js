// If you can't sleep, just count sheep!!
//
// Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

var countSheep = function (num){
   let sum = '';
  for( let i = 1; i<num + 1; i++ ){
    sum += [i] + ' sheep...'
  }
  return sum;

countSheep(3)
}
