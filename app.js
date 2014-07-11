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

// letterGrade

console.log('\n')
console.log('LETTER GRADES')
function letterGrade(n){
  var grade;
  if( n >= 0 && n <= 59){grade = 'F'};
  if( n >= 60 && n <= 69){grade = 'D'};
  if( n >= 70 && n <= 79){grade = 'C'};
  if( n >= 80 && n <= 89){grade = 'B'};
  if( n >= 90 && n <= 100){grade = 'A'};
  return grade
}

var numGrade;
numGrade = 45;
console.log(numGrade + ' -> ' + letterGrade(numGrade));

numGrade = 65;
console.log(numGrade + ' -> ' + letterGrade(numGrade));

numGrade = 75;
console.log(numGrade + ' -> ' + letterGrade(numGrade));

numGrade = 85;
console.log(numGrade + ' -> ' + letterGrade(numGrade));

numGrade = 95;
console.log(numGrade + ' -> ' + letterGrade(numGrade));

//Add tax function

function addTax(b, t){
  return  b * (1+(t/100));
}

console.log(addTax(100,10).toFixed(2));
console.log(addTax(200,10).toFixed(2));
console.log(addTax(100,15).toFixed(2));

// sum an array

function sumArray(n){
  var sum = 0
  for( var i = 0; i < n.length; i++){
    sum += n[i]
  }
  return sum
}

var array1 = [ 1,5,45,43,2]
console.log(array1)
console.log(sumArray(array1))


function factorial(n){
  var count = 1
  if( n != 0 && n != 1){
    for( var i = 2; i <= n; i++){
      count *= i
    }
  }
  return count
}
console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(1))
console.log(factorial(0))
console.log(factorial(15))
