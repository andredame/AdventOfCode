import fs, { copyFileSync } from 'fs';

const input = fs.readFileSync('2022/day005/input.txt', 'utf8').replace(/\r/g, '').split('\n');

let [stackInput, movements ] = [input.slice(0, input.indexOf('')), input.slice(input.indexOf('') + 1)];


var NUMBEROFSTACKS= stackInput[stackInput.length-1].split('  ').map(Number).length;
stackInput.pop()


//Main function
function main(){

    let stacks= new Map();
    stack(stacks);
    fillStacks(stacks);
    console.log(stacks);
}

//Fill the stacks with the input for the first time 
const fillStacks= (stacks) => {
    for(let i=stackInput.length-1;i>=0;i--){
        stackInput[i].split('').forEach((element,index) => {
            if(element !== ' ' && element !== '[' && element !== ']'){
                if(index%NUMBEROFSTACKS ==0 ){stacks.get(NUMBEROFSTACKS).push(element)}
                else{stacks.get(index%NUMBEROFSTACKS).push(element)}
            }
        });

    }
}

//create the stacks with the number of stacks given
const stack= (stacks) => {
    for(let i=1; i<=NUMBEROFSTACKS; i++){stacks.set(i,[]);}
}


//Here is where the magic happens
function pileUp(stack){

    

}


main();
