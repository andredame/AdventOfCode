import fs from 'fs';

const input = fs.readFileSync('./2023/inputs/input005.txt', 'utf8').replace(/\r/g, '').split(/\n\s*\n/).map(part => part.replace(/\n/g, '|'));

const seeds=input[0].split(':')[1].trim().split(' ').map(seed=>parseInt(seed));
input.shift();
let rules=[];
input.forEach((line) => {
    let  numbers=line.split(':')[1].slice(1).split('|');
    numbers=numbers.map(number=>number.split(' ').map(num=>parseInt(num)));
    rules.push(numbers);
});   




function partOne(){
    let minimum=Infinity
    
    seeds.forEach(seed=>{
        let numberToLookFor=seed;
        for(let i=0;i<rules.length;i++){
            let j = 0;
            while (j < rules[i].length) {

                let [target, source, range] = rules[i][j];

                if (source <= numberToLookFor) {
                    if (source === numberToLookFor) {numberToLookFor = target;break;}
                    if (numberToLookFor - source < range) {
                        numberToLookFor = target + (numberToLookFor - source);
                        break;
                    }
                }

                j++;
            }
        }
        minimum=Math.min(minimum,numberToLookFor);
    });
    return minimum;
}

function partTwo(){

    let count = 0;

    while(true){
        let numberToLookFor=count;
        for(let i=rules.length-1;i>=0;i--){
    
            let j = 0;
            while (j < rules[i].length) {

                let [source, target, range] = rules[i][j];

                if (source <= numberToLookFor) {
                    if (source === numberToLookFor) {
                        numberToLookFor = target;
                        break;
                    }
                    if (numberToLookFor - source < range) {
                        numberToLookFor = target + (numberToLookFor - source);
                        break;
                    }
                }
                j++;
            }
            
        }
        if(isInRange(numberToLookFor)){
            return count;  
        }
        
        count++;
    }
}

function isInRange(number){
    for(let i=0;i<seeds.length;i+=2){
        if(seeds[i]<=number && seeds[i+1]>= number - seeds[i]){
            return true;
        }
    }
    return false;
}




function main(){
    console.log(partOne());
    console.log(partTwo());

}
main();