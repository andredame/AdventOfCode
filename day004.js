import fs from 'fs';
import readline from 'readline';


const readInterface = readline.createInterface({
    input: fs.createReadStream('inputs/input004.txt'),
    console: false
});

let totalPart01 = 0;
let numberOfCard = 0;
let copies=new Array(197).fill(1);




readInterface.on('line', (line) => {
    const colonIndex = line.indexOf(':');
    numberOfCard++;
    
    const pipeIndex = line.indexOf('|');

    if (colonIndex !== -1 && pipeIndex !== -1) {

        const card = line.substring(colonIndex + 1, pipeIndex).trim().split(' ').filter(Boolean).map(Number);

        const afterPipe = line.substring(pipeIndex + 1).trim().split(' ').filter(Boolean).map(Number);
        let numberEachLine = 0;
        let count = 0;

        for (let i = 0; i < card.length; i++) {
            const cardNumber = card[i];
            if (afterPipe.includes(cardNumber)) {
                count++;
                if (numberEachLine === 0) {
                    numberEachLine = 1;
                } else {
                    numberEachLine *= 2;
                }
            }
        }
        totalPart01 += numberEachLine;
        

        console.log(numberOfCard)
        for(let i=copies[numberOfCard-1]; i>0; i--){
            for(let j=0; j<count; j++){
                copies[numberOfCard+j]++;
            }
            
        }

    }
});

readInterface.on('close', () => {
    console.log(copies);    
    console.log("part 01",totalPart01);
    let sum=0;
    copies.forEach(element => {
        sum+=element;
    });
    console.log("part 02",sum);
});


//part 2 

