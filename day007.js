import fs from 'fs';

const input = fs.readFileSync('./inputs/input007.txt', 'utf8').replace(/\r/g, '').split('\n');

console.log(input);