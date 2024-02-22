import fs from 'fs';

const lines = fs.readFileSync('./2023/inputs/input001.txt', 'utf8').replace(/\r/g, '').split('\n');

var MAP = new Map();

function partOne(lines) {
    let totalPart01 = 0;

    for (const line of lines) {
        let numberFirst = -1;
        let lastNumber = -1;

        for (let i = 0; i < line.length; i++) {
            const element = line[i];

            if (!isNaN(element)) {
                if (numberFirst === -1) {numberFirst = Number(element);}
                lastNumber = Number(element);
            }
        }
        totalPart01 += Number(numberFirst + '' + lastNumber);
    }

    return totalPart01;
}

function partTwo(lines) {
    let totalPart02 = 0;

    for (const line of lines) {

        let subString='';
        let i=0;
        let [firstNumber, lastNumber] = [0, 0];
        while(true){
            subString+=line[i];
            let n =findFirstNumber(subString);
            if(n!==0){
                firstNumber=n;
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
                break;
            }
            i--;
        }
        totalPart02 += Number(firstNumber + '' + lastNumber);
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

function main(){
    console.log("part 01", partOne(lines));
    console.log("part 02", partTwo(lines));

}


main();
