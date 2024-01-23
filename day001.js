import fs from 'fs';
import readline from 'readline';

const lines = fs.readFileSync('./inputs/input001.txt', 'utf8').replace(/\r/g, '').split('\n');


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

        let lineToReplace = replaceWordToNumber(line);

        let [firstNumber,lastNumber] = [-1,-1];

        for (let i = 0; i < lineToReplace.length; i++) {
            if (!isNaN(lineToReplace[i])) {
                if (firstNumber === -1) {
                    firstNumber = Number(lineToReplace[i]);
                }
                lastNumber = Number(lineToReplace[i]);
            }
        }
        
        totalPart02 += Number(firstNumber + '' + lastNumber);
    }

    return totalPart02;
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

function main(){
    console.log("part 01", partOne(lines));
    console.log("part 02", partTwo(lines));

}


main();
