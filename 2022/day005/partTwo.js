// For this part, I thought to implement a brute force algorithm that distributes elements into other stacks.
import fs, { copyFileSync } from 'fs';

const input = fs.readFileSync('2022/day005/input.txt', 'utf8').replace(/\r/g, '').split('\n');

let [stackInput, movements ] = [input.slice(0, input.indexOf('')), input.slice(input.indexOf('') + 1)];


var NUMBEROFSTACKS= stackInput[stackInput.length-1].split('')



stackInput.pop()


//Main function
function main(){

    let stacks= new Map();
    let numberToIndex=new Map();
    
    createMap(stacks,numberToIndex);

    fillStacks(stacks); 
    movements.forEach(line =>{
        let phrase=line.split(' ')
        let [amount,source,target]=[parseInt(phrase[1]),numberToIndex.get(parseInt(phrase[3])),numberToIndex.get(parseInt(phrase[5]))];
        if(amount===1){ stacks.get(target).push(stacks.get(source).pop());}
        else {
            let aux = stacks.get(source).splice(-amount);
            aux.forEach(element => stacks.get(target).push(element));
        }
        

    });
    
    let outcome='';
    stacks.forEach(array=>{
        outcome+=array.pop();
    })
    console.log('Part One:',outcome)
    


     
}

//Fill the stacks with the input for the first time 
const fillStacks= (stacks) => {
    for(let i=stackInput.length-1;i>=0;i--){
        
        stackInput[i].split('').forEach((element,index) => {
            if(element !== ' ' && element !== '[' && element !== ']'){
                stacks.get(index).push(element)
            }
        });
    }
}

const createMap= (stacks,numberToIndex) => {
    let count=1;
    for(let i=0; i<NUMBEROFSTACKS.length; i++){ 
        if(NUMBEROFSTACKS[i]!=' '){
            numberToIndex.set(count,i)
            stacks.set(i,[])
            count++
        }
    }
}

main();
