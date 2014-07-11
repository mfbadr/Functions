var prompt = require('sync-prompt').prompt;
// increments
function increment(x){
  x++;
  return x
}

console.log('INCREMENTS')
var z = increment(3);
console.log(z);


var z = increment(7);
console.log(z);
var z = increment(9);
console.log(z);
var z = increment(12);
console.log(z);

// square
function square(n){
  n *= n
  return n 
}

console.log('\n')
console.log('SQUARES') 

var s = square(3);
console.log(s);

var s = square(6);
console.log(s);

var s = square(33);
console.log(s);

var s = square(533);
console.log(s);
//area
function area(a,b){
  return a*b
}

console.log('\n')
console.log('AREAS')

var size = area(7, 6)
console.log(size)

size = area(3, 8)
console.log(size)

size = area(7, 2)
console.log(size)

size = area(7, 188888)
console.log(size)
// volume
function volume(a,b,c){
  return a * area(b,c)
}

console.log('\n')
console.log('VOLUMES')
var vol = volume( 4,6,7)
console.log(vol)

var vol = volume( 8,2,3)
console.log(vol)
var vol = volume( 4,5,9)
console.log(vol)
var vol = volume( 14,64,7)
console.log(vol)


//playing with functions

console.log('\n')
console.log('PLAYING WITH FUNCTIONS')
var play = area(square(increment(3)+increment(4)), square(2))
console.log(play)

//hello
function Hello(){
  console.log('Hello')
}

Hello()
//make upper
function makeUpper(n){
  return n.toUpperCase()
}

console.log(makeUpper('hello world'))

 
// can drink
function drink(x){
  var i_canDrink = false
  if(x >= 21){
    i_canDrink = true
  }
  return i_canDrink
}

console.log(drink(12));
console.log(drink(22));

