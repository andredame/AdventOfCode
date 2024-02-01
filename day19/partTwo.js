import fs from 'fs';

const input = fs.readFileSync(('./inputs/input019.txt'), 'utf8').replace(/\r/g, '').split('\n');

var MAP= new Map();

const workFlows = input.slice(0, input.indexOf(''));

function fillHashMap(){
   workFlows.forEach((line) => {
        const key=line.slice(0, line.indexOf('{'));
        const value=line.slice(line.indexOf('{')+1, line.indexOf('}')).split(',');
        MAP.set(key,value);
   });
}

function numOfcombinations(value){
    let combinations = {
        rangeLowX:1, rangeHighX:4000, 
        rangeLowM:1, rangeHighM:4000, 
        rangeLowA:1, rangeHighA:4000, 
        rangeLowS:1, rangeHighS:4000
    };

    stack = [];
    stack.push(MAP.get('in'),combinations);

    let [rules,combination]=stack.pop();
    console.log(combination);
    

    while(stack.length>0){
        break;
    }
}

function goesTo(combination,rule){
    if(MAP.has(rule)){
        stack.push(MAP.get(rule),combination);
    }else{
        
    }

}

function partTwo(){
    let combinations = {
        rangeLowX:1, rangeHighX:4000, 
        rangeLowM:1, rangeHighM:4000, 
        rangeLowA:1, rangeHighA:4000, 
        rangeLowS:1, rangeHighS:4000,
        list: MAP.get('in')
    };
    let stack = [];
    stack.push(combinations);
    while(stack.length>0){
        let currentCombination = stack.pop();
        let currentList = currentCombination.list;
    }    

}
function goesTo(stack,combination,rule){
    rule.forEach((element) => {
        if(MAP.has(element)){
            stack.push(MAP.get(element),combination);
        }else{
            if(rule.includes('<') || rule.includes('>')){
            
            }
            
        }
    });
}

function main(){
    fillHashMap();
    console.log(partTwo());
    
}
main();