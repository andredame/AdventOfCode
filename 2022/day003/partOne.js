import fs from 'fs';

const input = fs.readFileSync('2022/day003/input.txt', 'utf8').replace(/\r/g, '').split('\n');
let separatedInput = input.map((line) => {
    let middle = Math.floor(line.length / 2);
    return [line.substring(0, middle), line.substring(middle)];
});

function getNumber(char) {
    if(char === char.toUpperCase() ){return char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 27;}
    return char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

function findRepeatedLetters(firstPart, secondPart){
    let set = new Set();
    for(let i = 0; i < firstPart.length; i++){
        set.add(firstPart[i]);
    }
    for(let i = 0; i < secondPart.length; i++){
        if(set.has(secondPart[i])){
            return secondPart[i];
        }
    }
    
}

function main(){
    let result = 0;
    separatedInput.forEach((line) => {
        result += getNumber(findRepeatedLetters(line[0], line[1]))
    });
    console.log(result);
}



main();