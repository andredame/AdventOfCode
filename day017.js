import fs from 'fs';

const input = fs.readFileSync('./inputs/input017.txt', 'utf8').replace(/\r/g, '').split('\n').map((row) => row.split(''));


function heuristic(position,target){
    return Math.abs(position.x - target.x) + Math.abs(position.y - target.y);
}

function partOne(){
    

}

function aStarSearch(start,target,grid){
    
   
}

function neighbors(position,grid){
    
}



function main(){
    console.log('Part 01',partOne());
}
main();