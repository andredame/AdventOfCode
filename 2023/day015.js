import fs from 'fs';

const input = fs.readFileSync('./2023/inputs/input015.txt', 'utf8');

function partOne(){
    let steps= input.split(',');
    let total=0; 
    steps.forEach(step => {
        total+=hashAlgorithm(step);
    });
    
    return total;
}

function hashAlgorithm(word){
    let count=0;
    let value=0;
    while(count<word.length){
        value+=word.charCodeAt(count);
        value*=17;
        value %=256;
        count++;
    }
    return value;
}

function focusPower(numberBox,Slot,focalLength){
    //(numberBox +1 )* numberOfSlot * focal Length;
    console.log((numberBox +1 ),Slot , focalLength);
    return (numberBox +1 )* Slot * focalLength;


}

function partTwo() {
    
    let hashMap = new Map();
    
    
    let steps=input.split(',');

    steps.forEach(step =>{
        let indexSymbol = symbol(step);
        let word = step.slice(0,indexSymbol);
        //is ther
        if(step[indexSymbol]==='-'){
            let list = hashMap.get(numberOfBox(word));
            if(list){
                list=removeLabel(list,word);
                hashMap.set(numberOfBox(word),list);
            }

        }
        if(step[indexSymbol]==='='){
            let value = parseInt(step.slice(indexSymbol+1));
            if(hashMap.has(numberOfBox(word))){
                let label = {word:word, value:value};
                let list = hashMap.get(numberOfBox(word));
                list=hasTheLabel(list,label);
                hashMap.set(numberOfBox(word),list);
            }
            else{
                hashMap.set(numberOfBox(word),[{word:word, value:value}]);
            }
        }
            
        
    });
    let total=0;
    hashMap.forEach((value,key)=>{
        let slot=0;
        value.forEach(element => {
            total+=focusPower(key,slot+1,element.value);
            slot++;
        });
    
    });

    return total;
}
function removeLabel(array,word){
    let newArray=[];
    array.forEach(element => {
        if(element.word!==word){
            newArray.push(element);
        }
    });
    return newArray;
}

function hasTheLabel(array,newLabel){
    let boolean=false;
    array.forEach(element => {
        if(element.word===newLabel.word){
            element.value= newLabel.value;
            boolean=true;
        }
    });
    if(!boolean){
        array.push(newLabel);
    }
    return array;
}

function numberOfBox(word){
    return hashAlgorithm(word);
}

function symbol(step){
    if(step.includes('-')){return step.indexOf('-');}
    if(step.includes('=')){return step.indexOf('=');}
}


function main(){
    console.log('Part two:', partTwo());

}

main();