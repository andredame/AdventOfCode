import fs from 'fs';
import { connect } from 'http2';
import PriorityQueue from 'js-priority-queue'; 

const inputWithSlopes = fs.readFileSync('./2023/inputs/input023.txt', 'utf8').replace(/\r/g, '').split('\n');

const input = inputWithSlopes.map((row) => row.replace(/[<>^v]/g, '.'));

var grid = input.map((row) => row.split(''));

var FIRST_POS ={y:0,x: input[0].split('').indexOf('.'),distance:0};

var LAST_POS ={y:input.length-1,x: input[input.length-1].split('').indexOf('.'),distance:1};

function isValidPosition(neighbor){
    if(neighbor.y<0){return false;}
    if(neighbor.x<0){return false;}
    if(neighbor.y>=grid.length){return false;}
    if(neighbor.x>=grid[0].length){return false;}
    if(grid[neighbor.y][neighbor.x] == '#'){return false;}
    return true;
}

function getNeighbors(pos,visitedNodes){
    let neighbors = [];
    let moves = [[0, 1], [0, -1], [1, 0], [-1, 0]]; 
    
    for(let move of moves){
        let neighbor = {
            y:pos.y+move[0],
            x:pos.x+move[1],
            distance:pos.distance+1,
        };
        if(isValidPosition(neighbor) && !visitedNodes.has(`${neighbor.y},${neighbor.x}`)){
            neighbors.push(neighbor);
        }
    }
    return neighbors;
}


let visited = new Set();

let connections = new Map();

function partTwo() {
    
    let nodes=[];
    let queue=[FIRST_POS,LAST_POS];   

    while(queue.length>0){
        let current = queue.shift();
        if(visited.has(`${current.y},${current.x}`)){continue;}
        visited.add(`${current.y},${current.x}`);
        let neighbors = findNodes(current);
        for(let neighbor of neighbors){
            queue.push(neighbor);

            let key = `${current.y},${current.x}`;

            if (!connections.has(key)) {
                connections.set(key, []);
            }
            if (!connections.get(key).some(({ y, x }) => y === neighbor.y && x === neighbor.x)) {
                connections.get(key).push(neighbor); 
            }
            
            let neighborKey = `${neighbor.y},${neighbor.x}`;
            if (!connections.has(neighborKey)) {
                connections.set(neighborKey, []);
            }
            if (!connections.get(neighborKey).some(({ y, x }) => y === current.y && x === current.x)) {
                connections.get(neighborKey).push({y:current.y,x:current.x,distance:neighbor.distance});
            }
        }
        nodes.push(current);
    }
    let path= findAllPaths(FIRST_POS,LAST_POS,connections);
    console.log(path);
    let maxDistance = 0;
    for(let p of path){
        let distance = 0;
        for(let i=0;i<p.length;i++){
            distance += p[i].distance;
        }
        if(distance>maxDistance){
            maxDistance = distance;
        }
    }
    return maxDistance;
}
function findAllPaths(start,end,connections){
    let queue = [{node:start,path:[start]}];
    let paths = [];
    while(queue.length>0){
        let current = queue.shift();
        if(current.node.y == end.y && current.node.x == end.x){
            paths.push(current.path);
            continue;
        }
        for(let neighbor of connections.get(`${current.node.y},${current.node.x}`)){
            if(!current.path.some((node)=>node.y == neighbor.y && node.x == neighbor.x)){
                queue.push({node:neighbor,path:[...current.path,neighbor]});
            }
        }
    }
    return paths;
}



let pathToNode = new Map();

const findNodes=(nodePosition)=>{
    let visitedNodes = new Set();
    visitedNodes.add(`${nodePosition.y},${nodePosition.x}`);
    let position={y:nodePosition.y,x:nodePosition.x,distance:0}
    
    let stack = getNeighbors(position,visitedNodes);
    let nodes=[];

    let paths = [];
    
    while(stack.length>0){
        let current = stack.pop();
        
        if(visitedNodes.has(`${current.y},${current.x}`)){continue;}
        visitedNodes.add(`${current.y},${current.x}`);
        paths.push(current)
        let neighbors = getNeighbors(current,visitedNodes);
        if (neighbors.length > 1){
            nodes.push({y:current.y,x:current.x,distance:current.distance});
            pathToNode.set(`${nodePosition.y},${nodePosition.x} to ${current.y},${current.x}`, paths);
            paths = [];
            continue;
        }
        if(neighbors.length == 1){stack.push(neighbors[0]); ; continue;}
        if(neighbors.length == 0){continue;}
    }
    
    return nodes;
   
}

function main(){ 
    console.log(partTwo());  
}

main();