import fs from 'fs';

const input = fs.readFileSync('./2023/inputs/input009.txt', 'utf8').replace(/\r/g, '').split('\n');

function partOne(){
    let sum=0;

    for (let line=0;line<input.length;line++){
        let currentArray=input[line].split(' ').map((number)=>Number(number));
        
        while(!allZeros(currentArray)){
            let newArray=[];
            for(let i=0;i<currentArray.length-1;i++){
                newArray.push(currentArray[i+1]-currentArray[i]);
                
            }
            sum+=currentArray[currentArray.length-1];
            currentArray=newArray;
        }
    }
    return sum;

}
function partTwo(){
    let total=0;
    for (let line=0;line<input.length;line++){
        let currentArray=input[line].split(' ').map((number)=>Number(number));
        let firstNumbers=[];
        
        while(!allZeros(currentArray)){
            let newArray=[];
            for(let i=0;i<currentArray.length-1;i++){
                if(i===0){
                    firstNumbers.push(currentArray[i]);
                }
                newArray.push(currentArray[i+1]-currentArray[i]);
                
            }
            currentArray=newArray;
        }
        let previousSum=0;
        for(let last=firstNumbers.length-1;last>=0;last--){
            previousSum= firstNumbers[last]-previousSum;
        }
        total+=previousSum;
    }
    return total;
    
}
function allZeros(array){
    return array.every((number)=>number == 0);
}

console.log(partTwo());
