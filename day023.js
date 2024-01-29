import fs from 'fs';

const input = fs.readFileSync('./inputs/input023.txt', 'utf8').replace(/\r/g, '').split('\n');
const maior = fs.readFileSync('./inputs/input000.txt', 'utf8').replace(/\r/g, '').split('\n');

var MAP = input.map((row) => row.split(''));

var HEIGHT = MAP.length;

var WIDTH = MAP[0].length;

var FIRST_POS ={y:0,x: input[0].split('').indexOf('.'),distance:0,visited : new Set()};

var LAST_POS ={y:input.length-1,x: input[input.length-1].split('').indexOf('.'),distance:0};

let distances=[];



let visited = new Set();

function partOne(){
    let path = [];
    dfsTraverse(FIRST_POS,LAST_POS,visited,path);
    return LAST_POS.distance;
}




function dfsTraverse(source,destination,visited,path){
    if(source.x == destination.x && source.y == destination.y){
        destination.distance=source.distance>destination.distance?source.distance:destination.distance;
        return true;
    }
    visited.add(source.x+','+source.y);
    let neighbors = getNeighbors(source);
    for(let neighbor of neighbors){
        if(!visited.has(neighbor.x+','+neighbor.y)){
            path.push(neighbor);
            dfsTraverse(neighbor,destination,visited,path);
            path.pop();
        }
    }
    visited.delete(source.x+','+source.y);
}


function getNeighbors(pos){
    let neighbors = [];
    let moves = [[0, 1], [0, -1], [1, 0], [-1, 0]]; 
    for(let move of moves){
        let neighbor = {
            y:pos.y+move[0],
            x:pos.x+move[1],
            distance:pos.distance+1,
          };  // Create a new set based on the current position's visited set
        
        if(isValid(pos,neighbor) && !visited.has(neighbor.x+','+neighbor.y) ){
            neighbors.push(neighbor);
        }
    }
    return neighbors;
}




function isValid(current,neighbor){
    if(neighbor.y<0){return false;}
    if(neighbor.x<0){return false;}
    if(neighbor.y>=MAP.length){return false;}
    if(neighbor.x>=MAP[0].length){return false;}
    if(MAP[neighbor.y][neighbor.x] == '#'){return false;}
    let slopes = ['<','>','^','v'];
    // i    f(slopes.includes(MAP[neighbor.y][neighbor.x])){return isSlope(neighbor,current);}
    return true;
}

function isSlope(neighbor,current){
   if (MAP[neighbor.y][neighbor.x] == '<' && current.y == neighbor.y && current.x > neighbor.x){return true;}
    if (MAP[neighbor.y][neighbor.x] == '>' && current.y == neighbor.y && current.x < neighbor.x){return true;}
    if (MAP[neighbor.y][neighbor.x] == '^' && current.y > neighbor.y && current.x == neighbor.x){return true;}
    if (MAP[neighbor.y][neighbor.x] == 'v' && current.y < neighbor.y && current.x == neighbor.x){return true;}

    return false;

}

function createGraph(){
    let graph = {};
    for(let i=0;i<HEIGHT;i++){
        for(let j=0;j<WIDTH;j++){
            if(MAP[i][j] != '#'){
                graph[i+','+j] = getNeighbors({y:i,x:j});
            }
        }
    }
    return graph;

}



function partTwo() {
    console.log(createGraph());
}


function main(){ 

    partTwo()
}

main();