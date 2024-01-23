import fs from 'fs';

let input = fs.readFileSync('./inputs/input006.txt', 'utf8');
let lines = input.split('\n'); // split by lines

let timeLine = lines[0].replace(/\r/g, '').split(/\s+/).slice(1); // replace \r with an empty string, split the first line by spaces, and remove the first element
let distanceLine = lines[1].replace(/\r/g, '').split(/\s+/).slice(1); // replace \r with an empty string, split the second line by spaces, and remove the first element

let time = timeLine.map(Number); // convert to numbers
let distance = distanceLine.map(Number); // convert to numbers
let outcome=[];


for(let i=0; i<time.length; i++){
    let numberOfTimes=0;
    for(let j=0; j<time[i]; j++){
        let timePressedButton=j;
        let timeMoving=time[i]-j;
        if(timePressedButton*timeMoving>distance[i]){
            numberOfTimes++;
        }
    }

    outcome.push(numberOfTimes);

    
}
let resposta=1;

for(let i=0; i<outcome.length; i++){
    resposta*=outcome[i];
}
console.log('First answer is: '+resposta);

//part 02 
// Part 02
let timeLine2 = lines[0].replace(/\r/g, '').split(/\s+/).slice(1).join('');
let distanceLine2 = lines[1].replace(/\r/g, '').split(/\s+/).slice(1).join('');

let numberOfTimes=0;
for(let j=0; j<timeLine2; j++){
    let timePressedButton=j;
    let timeMoving=timeLine2-j;
    if(timePressedButton*timeMoving>distanceLine2){
        numberOfTimes++;
    }
}

console.log('Second answer is: '+numberOfTimes);


