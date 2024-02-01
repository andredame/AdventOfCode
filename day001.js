import fs from 'fs';
import readline from 'readline';

const lines = fs.readFileSync('./inputs/input001.txt', 'utf8').replace(/\r/g, '').split('\n');

var MAP = new Map();



function partOne(lines) {
    let totalPart01 = 0;

    for (const line of lines) {
        let numberFirst = -1;
        let lastNumber = -1;

        for (let i = 0; i < line.length; i++) {
            const element = line[i];

            if (!isNaN(element)) {
                if (numberFirst === -1) {
                    numberFirst = Number(element);
                }
                lastNumber = Number(element);
            }
        }

        let number = numberFirst + '' + lastNumber;
        totalPart01 += Number(number);
    }

    return totalPart01;
}

function partTwo(lines) {
    let totalPart02 = 0;

    for (const line of lines) {
        console.log(line);

        let subString='';
        let i=0;
        let [firstNumber, lastNumber] = [0, 0];
        while(true){
            subString+=line[i];
            let n =findFirstNumber(subString);
            if(n!==0){
                firstNumber=n;
                console.log('first', firstNumber);
                break;
            }
            i++;
            
        }
        subString='';
        i=line.length-1;
        while(true){
            subString+=line[i];
            let reverseSubString = reverseString(subString);
            let n =findFirstNumber(reverseSubString);
            if(n!==0){
                lastNumber=n;
                console.log('last', lastNumber);
                break;
            }
            i--;
        }
        

        let number = firstNumber + '' + lastNumber;
        totalPart02 += Number(number);

    }

    return totalPart02;
}

function reverseString(str) {
    
    return str.split('').reverse().join('');
}

function findFirstNumber(str) {
    if(str.includes('1') || str.includes('one')){return 1;}
    if(str.includes('2') || str.includes('two')){return 2;}
    if(str.includes('3') || str.includes('three')){return 3;}
    if(str.includes('4') || str.includes('four')){return 4;}
    if(str.includes('5') || str.includes('five')){return 5;}
    if(str.includes('6') || str.includes('six')){return 6;}
    if(str.includes('7') || str.includes('seven')){return 7;}
    if(str.includes('8') || str.includes('eight')){return 8;}
    if(str.includes('9') || str.includes('nine')){return 9;}
    return 0;
}



function replaceWordToNumber(word) {
    const wordToNumber = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    };
    
    return word;
}
function fillMap() {
    MAP.set('one', 1);
    MAP.set('two', 2);
    MAP.set('three', 3);
    MAP.set('four', 4);
    MAP.set('five', 5);
    MAP.set('six', 6);
    MAP.set('seven', 7);
    MAP.set('eight', 8);
    MAP.set('nine', 9);
}

function main(){
    console.log("part 01", partOne(lines));
    fillMap();
    console.log("part 02", partTwo(lines));

}


main();
