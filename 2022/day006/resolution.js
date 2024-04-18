import fs from 'fs'

const input = fs.readFileSync('./2022/day006/input.txt','utf-8').replace(/\r/g, '');


function partOne(string){
    let i=0;
    let set = new Set();
    
    while(i<string.length){
        for(let j=i;j<i+4;j++){
                set.add(string[j])
        }
        if(set.size === 4){return i+4}
        set.clear();
        i++;
    }
    
}

function partTwo(string){
    let i=0;
    let set = new Set();
    
    while(i<string.length){
        for(let j=i;j<i+14;j++){
            set.add(string[j])
        }
        if(set.size === 14){return i+14}
        set.clear();
        i++;
    }
}

console.log(partOne(input))
console.log(partTwo(input));
module.exports={partOne,partTwo};