import fs from 'fs';
const directions = fs.readFileSync('./inputs/input008.txt', 'utf8').replace(/\r/g, '').split('\n')[0]; // split by lines
const nodes = fs.readFileSync('./inputs/input008.txt', 'utf8').replace(/\r/g, '').split('\n').slice(2); // split by lines
let map={};
let endsWithA=[]; //for part 2


for(let line=0;line<nodes.length;line++){
    let [current,newNodes]=nodes[line].split('=');
    if(current.trim().endsWith('A')){
        endsWithA.push(current.trim());
    }
    let [left,right]=newNodes.replace('(','').replace(')','').split(',');
    left=left.trim();
    right=right.trim();
    map[current.trim()]={left,right};
}

function part01(){
    let current = 'AAA';
    let total=0;
   

    while(current !== 'ZZZ'){
        let {left,right}=map[current];

        let directionToGo=directions[total%directions.length];

        if(directionToGo === 'L'){
            current=left;
        }
        else{
            current=right;
        }
        total++;
    }
    return total;
}
function part02(){
    
    let current=endsWithA;
    let total=0;

     while(!current.every((node)=>node[2]==='Z')){
    
        current.forEach((node)=>{
    
            let {left,right}=map[node];
    
            let directionToGo=directions[total%directions.length];
    
            if(directionToGo === 'L'){current[current.indexOf(node)]=left;}
            
            else{current[current.indexOf(node)]=right;}

        });
        total++;
    }
    return total;
}

console.log(part01())
console.log(part02());
