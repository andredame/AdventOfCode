import fs from 'fs';

const input=fs.readFileSync('2022/day001/input.txt','utf8').replace(/\r/g,'').split('\n');
let result=0;
let aux=0;

input.forEach(value => {
    if(value === ''){result=Math.max(result,aux);aux=0;}
    else{aux+=parseInt(value);}
});
console.log(result);

