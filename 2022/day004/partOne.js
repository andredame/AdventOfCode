import fs from'fs';

const input = fs.readFileSync('./2022/day004/input.txt', 'utf8').replace(/\r/g, '').split('\n');

function main(){
    let validPairs = 0;
    input.forEach(line => {
        let  [firstPair,secondPair] = line.split(',');
        if(fullyContains(firstPair, secondPair)){
            console.log(firstPair, secondPair);
            validPairs++;
        }
    });
    console.log(validPairs);
    
}

function fullyContains(firstPair, secondPair){
    let [firstStart, firstEnd] = firstPair.split('-').map(Number);
    let [secondStart, secondEnd] = secondPair.split('-').map(Number);
    return (firstStart <= secondStart && firstEnd >= secondEnd) || (secondStart <= firstStart && secondEnd >= firstEnd);
}

main();