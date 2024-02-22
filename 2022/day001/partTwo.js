import fs from 'fs';

const input=fs.readFileSync('2022/day001/input.txt','utf8').replace(/\r/g,'').split('\n');
let values =[0,0,0]
let aux=0;

input.forEach(value => {
    if(value === '' ){
        if(aux>values[2]){
            values[0]=values[1];
            values[1]=values[2];
            values[2]=aux;
        }
        else if(aux>values[1]){
            values[0]=values[1];
            values[1]=aux;
        }
        else if(aux>values[0]){
            values[0]=aux;
        }
        aux=0;
    }
    else{aux+=parseInt(value);}
});
console.log(values[0]+values[1]+values[2]);

