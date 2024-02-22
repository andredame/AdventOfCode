import fs from 'fs';

const input = fs.readFileSync(('./2023/inputs/input019.txt'), 'utf8').replace(/\r/g, '').split('\n');

var MAP= new Map();

const workFlows = input.slice(0, input.indexOf(''));
let ratings=[];
for(let i=input.indexOf('')+1;i<input.length;i++){
    let rate=input[i].slice(1,input[i].length-1).split(',');
    let obj = {
        x: parseInt(rate[0].slice(rate[0].indexOf('=') + 1)),
        m: parseInt(rate[1].slice(rate[1].indexOf('=') + 1)),
        a: parseInt(rate[2].slice(rate[2].indexOf('=') + 1)),
        s: parseInt(rate[3].slice(rate[3].indexOf('=') + 1))
      };   
    ratings.push(obj);
}

function fillHashMap(){
   workFlows.forEach((line) => {
        const key=line.slice(0, line.indexOf('{'));
        const value=line.slice(line.indexOf('{')+1, line.indexOf('}')).split(',');
        MAP.set(key,value);
   });
}
function getRightNumber(rate,letter){
    if(letter ==='s'){return rate.s;}
    if(letter ==='m'){return rate.m;}
    if(letter ==='a'){return rate.a;}
    if(letter ==='x'){return rate.x;}
}
function validExpressions(rate,rule){
    let letter=getRightNumber(rate,rule[0]);
    
    let number= rule.slice(2,rule.indexOf(':'));
   
    if(rule[1]==='<'){
        return letter<parseInt(number);
    }
    if(rule[1]==='>'){
        return letter>parseInt(number);
    }
    
   
}

function partOne(){
    let resultA=[];

    ratings.forEach((rate) => {
        let list = MAP.get('in');
        let i=0;
        let current = list[i];
    
        while(current!='A' || current!='R'){
            console.log(current);

            if(current.includes('<') || current.includes('>')){
                let goesTo = current.slice(current.indexOf(':')+1);
                if(validExpressions(rate,current)){

                    if(goesTo === 'A' || goesTo === 'R'){
                        if(goesTo === 'A'){resultA.push(rate);}

                        break;
                    }
                    list=MAP.get(goesTo);
                    i=0;
                }else{i++;}
            }
            else{
                list=MAP.get(current);
                i=0;
            }
            if(list[i]==='A' || list[i]==='R'){
                if(list[i]==='A'){resultA.push(rate);}
                break;
            }
            current = list[i];
        }        
    });
    let sum=0;
    resultA.forEach((rate) => {
        sum+=rate.x;
        sum+=rate.m;
        sum+=rate.a;
        sum+=rate.s;
    });
    return sum;
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
        rangeLowS:1, rangeHighS:4000
    };
    let stack = [];
    stack.push(MAP.get('in'),combinations);
    console.log(stack)

}




function main(){
    fillHashMap();
    console.log(partTwo());
}
main();
