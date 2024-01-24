import fs from 'fs';
import { get } from 'http';

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

function getSteps(directions,nodes,startingNode){
    let total = 0;
    let current = startingNode;
  
    while (current[2] !== 'Z') {
      let {left,right} = map[current];
      
      let directionToGo = directions[total % directions.length];
  
      if (directionToGo === 'L') {
        current = left;
      } else {
        current = right;
      }
      total++;
    }
  
    return total;
}
function part02(){
    let steps=[];
    for(let i=0;i<endsWithA.length;i++){
        steps.push(getSteps(directions,nodes,endsWithA[i]));
    }
    return lcm(...steps);   
}

function lcm(...numbers) {
    return numbers.reduce((a, b) => a * b / gcd(a, b));
}

function gcd(...numbers) {
    return numbers.reduce((a, b) => {
        while (b) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    });
}
function main(){
    console.log("Part 1:",part01());
    console.log("Part 2:",part02());
}
main();
