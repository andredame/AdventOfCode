import fs from 'fs';

const input = fs.readFileSync('./inputs/input015.txt', 'utf8');

function partOne(){
    let steps= input.split(',');
    let total=0; 
    steps.forEach(step => {
        total+=hashAlgorithm(step);
    });
    
    return total;
}

function hashAlgorithm(word){
    let count=0;
    let value=0;
    while(count<word.length){
        value+=word.charCodeAt(count);
        value*=17;
        value %=256;
        count++;
    }
    return value;
}

function partTwo() {
    return 'not done yet';
}


function main(){
    console.log('Part one:', partOne());
    console.log('Part two:', partTwo());

}

main();