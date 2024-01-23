import fs from 'fs';

const input = fs.readFileSync('./inputs/input003.txt', 'utf8');
const cleanedInput = input.replace(/\r/g, '');
const lines = cleanedInput.split('\n');
const elements = lines.map(element => element.split(''));

function verifySymbol(element) {
  return isNaN(element) && element !== '.';
}
const numbers = [];


function putValidPositions(i, j, array) {
  const directions = [-1, 0, 1];

  for (const xDirection of directions) {
    for (const yDirection of directions) {
      const newX = i + xDirection;
      const newY = j + yDirection;

      const isInsideArray =
        newX >= 0 &&
        newX < elements.length &&
        newY >= 0 &&
        newY < elements[i].length;

      if (isInsideArray && !(xDirection === 0 && yDirection === 0)) {
        array[newX][newY] = true;
      }
    }''
  }
}

const symbolsLocation = () => {
  const array = [];
  for (let i = 0; i < elements.length; i++) {
    const array2 = new Array(elements[i].length).fill(false);
    array.push(array2);
  }
  return array;
};
const symbolsLocationArray = symbolsLocation();


for (let i = 0; i < elements.length; i++) {
  for (let j = 0; j < elements[i].length; j++) {
    if (verifySymbol(elements[i][j])) {
      putValidPositions(i, j, symbolsLocationArray);
    }
  }
}
for (let i = 0; i < elements.length; i++) {
  for (let j = 0; j < elements[i].length; j++) {
    if (verifySymbol(elements[i][j])) {
      putValidPositions(i, j, symbolsLocationArray);
    }
  }
}

  let flag = false;
  let number = '';
  let validNumber = false;
  

for (let i = 0; i < elements.length; i++) {
  if(flag && validNumber) {
    numbers.push(number);
    validNumber=false;
    flag = false;
    number = '';
  }
  
  for (let j = 0; j < elements[i].length; j++) {
    if (!isNaN(elements[i][j])) {
      if (flag) {
        if (!validNumber) {
          validNumber = symbolsLocationArray[i][j];
          
        }
        number += elements[i][j];
      } else {
        flag = true;
        validNumber = symbolsLocationArray[i][j];
        
        number += elements[i][j];
      }
    } else {
      if (flag && validNumber) {
        numbers.push(number);
        flag = false;
        
      }
      number = '';
      validNumber = false;
    }
  }
}

let sum = 0;
numbers.forEach(element => {
  sum += parseInt(element);
});
console.log("part 01: "+sum);

//part 02


const numbersPart02 = [];

for (let i = 0; i < elements.length; i++) {
  for (let j = 0; j < elements[i].length; j++) {
    if (elements[i][j] === '*') {
      findAdjacentNumber(i,j,elements);
    }
  }
}

function findAdjacentNumber(i,j,array){

  const directions = [-1, 0, 1];
  const numbers = [];
  
  for (const xDirection of directions) {
    for (const yDirection of directions) {
      const newX = i + xDirection;
      const newY = j + yDirection;

      const isInsideArray =
        newX >= 0 &&
        newX < elements.length &&
        newY >= 0 &&
        newY < elements[i].length;

      if (isInsideArray && !(xDirection === 0 && yDirection === 0)) {
        if(!isNaN(array[newX][newY])){
          //object

          numbers.push({number:findWholeNumber(newX,newY,array),x:newX,y:newY});
        }
      }
    }
    
  }
  if(numbers.length===2){
    numbers[0].number= numbers[0].number*numbers[1].number;
    numbersPart02.push(numbers[0].number);
    

  }
}
function findWholeNumber(i, j, array) {
    let middle = array[i][j];
    let rightPart = '';
    let leftPart = '';
    let x = j - 1;
  
    while (!isNaN(array[i][x]) && x >= 0) {
      leftPart += array[i][x];
      array[i][x] = '.';
      x--;
    }
  
    x = j + 1;
    while (!isNaN(array[i][x])  && x < array[i].length) {
      rightPart += array[i][x];
      array[i][x] = '.';
      x++;
    }
  
    leftPart = leftPart.split('').reverse().join(''); // Fix the reversal
  
    array[i][j] = leftPart + middle + rightPart;
    return array[i][j];
}




flag = false;
number = '';
validNumber = false;
numbers.length=0;
  

for (let i = 0; i < elements.length; i++) {
  if(flag && validNumber) {
    numbers.push(number);
    validNumber=false;
    flag = false;
    number = '';
  }
  
  for (let j = 0; j < elements[i].length; j++) {
    if (!isNaN(elements[i][j])) {
      if (flag) {
        if (!validNumber) {
          validNumber = symbolsLocationArray[i][j];
          
        }
        number += elements[i][j];
      } else {
        flag = true;
        validNumber = symbolsLocationArray[i][j];
        
        number += elements[i][j];
      }
    } else {
      if (flag && validNumber) {
        numbers.push(number);
        flag = false;
        
      }
      number = '';
      validNumber = false;
    }
  }
}
console.log(numbersPart02);
let sumPart = 0;
numbersPart02.forEach(element => {
  sumPart += parseInt(element);
});
console.log("part 02: "+sumPart);

