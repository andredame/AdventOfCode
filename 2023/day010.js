import fs from 'fs';
const input = fs.readFileSync('./2023/inputs/input010.txt','utf-8').split('\r\n').map((line)=>line.split(''));

function findInitilpositionition(input){
    for(let i=0; i<input.length; i++){
        for(let j=0; j<input[i].length; j++){
            if(input[i][j]==='S'){
                return {y:i,x:j,distance:0};
            }
        }
    }
}


var map = input;

var HEIGHT = input.length;
var WIDTH = input[0].length;

var sPosition = findInitilpositionition(input);

function part01() {

    let queue = [];
    queue.push({y:sPosition.y-1,x:sPosition.x,previousX:sPosition.x,previousY:sPosition.y,distance:0});
    queue.push({y:sPosition.y+1,x:sPosition.x,previousX:sPosition.x,previousY:sPosition.y, distance:0});
    queue.push({y:sPosition.y,x:sPosition.x-1,previousX:sPosition.x,previousY:sPosition.y,distance:0});
    queue.push({y:sPosition.y,x:sPosition.x+1,previousX:sPosition.x,previousY:sPosition.y,distance:0});
    
    let hashMap = new Map();
    let maxNum=0;
    
    while (queue.length!==0){
        let aux =queue.shift();
        
        let current = toGo(aux);
        
        
        if(current === null || hashMap.has(current.x+''+current.y)){
            continue;
        }
        
        
        if(current.distance>maxNum){
            maxNum = current.distance;
        }
        hashMap.set(aux.x+' '+aux.y,true);
        
        queue.push(current);

    }
    return maxNum;
}


function toGo(position){

    if(position.x<0 || position.x>=HEIGHT || position.y<0 || position.y>=WIDTH){return null;}
    if(map[position.y][position.x] === '.'){return null;}
    

    if(map[position.y][position.x] === 'J'){
        if(position.previousX === position.x-1 && position.previousY === position.y){return {y:position.y-1,x:position.x,previousX:position.x,previousY:position.y,distance:position.distance+1};}
        if(position.previousX === position.x && position.previousY === position.y-1){return {y:position.y,x:position.x-1,previousX:position.x,previousY:position.y,distance:position.distance+1};}
    }
    if(map[position.y][position.x] === 'L'){
        if(position.previousX === position.x && position.previousY === position.y-1){return {y:position.y,x:position.x+1,previousX:position.x,previousY:position.y,distance:position.distance+1};}
        if(position.previousX === position.x+1 && position.previousY === position.y){return {y:position.y-1,x:position.x,previousX:position.x,previousY:position.y,distance:position.distance+1};}
    }
    if(map[position.y][position.x] === 'F'){
        if(position.previousX === position.x+1 && position.previousY === position.y){return {y:position.y+1,x:position.x,previousX:position.x,previousY:position.y,distance:position.distance+1};}
        if(position.previousX === position.x && position.previousY === position.y+1){return {y:position.y,x:position.x+1,previousX:position.x,previousY:position.y,distance:position.distance+1};}
    }
    if(map[position.y][position.x] === '|'){
        if(position.previousX === position.x && position.previousY === position.y+1){return {y:position.y-1,x:position.x,previousX:position.x,previousY:position.y,distance:position.distance+1};}
        if(position.previousX === position.x && position.previousY === position.y-1){return {y:position.y+1,x:position.x,previousX:position.x,previousY:position.y,distance:position.distance+1};}
    }
    if(map[position.y][position.x] === '-'){
        if(position.previousX === position.x+1 && position.previousY === position.y){return {y:position.y,x:position.x-1,previousX:position.x,previousY:position.y,distance:position.distance+1};}
        if(position.previousX === position.x-1 && position.previousY === position.y){return {y:position.y,x:position.x+1,previousX:position.x,previousY:position.y,distance:position.distance+1};}
    }
    if(map[position.y][position.x] === '7'){
        if(position.previousX === position.x && position.previousY === position.y+1){return {y:position.y,x:position.x-1,previousX:position.x,previousY:position.y,distance:position.distance+1};}
        if(position.previousX === position.x-1 && position.previousY === position.y){return {y:position.y+1,x:position.x,previousX:position.x,previousY:position.y,distance:position.distance+1};}
        
    }
    return null;

}

function main(){
    console.log('Part 01:', part01());
    console.log('Part 02:', part02());
}

main();