import { count } from 'console';
import fs from 'fs';
import path from 'path';


const inputWithSlopes = fs.readFileSync('./inputs/input023.txt', 'utf8').replace(/\r/g, '').split('\n');
//i want to replace all > < ^ v with .

const input = inputWithSlopes.map((row) => row.replace(/[<>^v]/g, '.'));

var grid = input.map((row) => row.split(''));

var FIRST_POS ={y:0,x: input[0].split('').indexOf('.'),distance:1};

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
    let [firstNode, lastNode] = [findNodes(FIRST_POS)[0], findNodes(LAST_POS)[0]];
    
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
                connections.get(neighborKey).push(current);
            }
        }
        nodes.push(current);
    }
    let paths = findAllPaths(FIRST_POS, LAST_POS, connections);    
   

}
function findAllPaths(source, target, connections) {
    let visited = new Set();
    let path = [];
    let paths = [];
    let key = `${source.y},${source.x}`;
    visited.add(key);
    path.push(source);
    findPath(source, target, connections, visited, path, paths);
    return paths;

}
let distance=0;
function findPath(source, target, connections, visited, path, paths) {
    if (source.y === target.y && source.x === target.x) {
        distance = Math.max(distance, printPath(path));
        paths.push([...path]);
        
        return;
    }
    let key = `${source.y},${source.x}`;
    for (let neighbor of connections.get(key)) {
        let neighborKey = `${neighbor.y},${neighbor.x}`;
        if (!visited.has(neighborKey)) {
            visited.add(neighborKey);
            path.push(neighbor);
            findPath(neighbor, target, connections, visited, path, paths);
            path.pop();
            visited.delete(neighborKey);
        }
    }
}

const printPath = (path) => {
    let prevNode = FIRST_POS;
    let grid = input.map((row) => row.split(''));
    let distance = 0;
    for (let i = 0; i < path.length-1; i++) {
        let pathKey = `${prevNode.y},${prevNode.x} to ${path[i].y},${path[i].x}`;
        console.log(pathKey);
        if (pathToNode.has(pathKey)) {
            pathToNode.get(pathKey).forEach((node) => {
                grid[node.y][node.x] = 'O';
            });
        }
        prevNode = path[i];
    }
    let pathKey = `${LAST_POS.y},${LAST_POS.x} to ${prevNode.y},${prevNode.x}`;
    if (pathToNode.has(pathKey)) {
        pathToNode.get(pathKey).forEach((node) => {
            grid[node.y][node.x] = 'O';
        });
    }
    console.log(distance);
    
    return countO(grid);
} 
let pathToNode=new Map();

const findNodes=(position)=>{
    let visitedNodes = new Set();
    visitedNodes.add(`${position.y},${position.x}`);
    
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
            pathToNode.set(`${position.y},${position.x} to ${current.y},${current.x}`, paths);
            paths = [];
            continue;
        }
        if(neighbors.length == 1){stack.push(neighbors[0]); ; continue;}
        if(neighbors.length == 0){continue;}
    }
    
    return nodes;
   
}

const countO = (grid) => {
    return grid.reduce((acc, row) => {
        return acc + row.filter((val) => val === 'O').length;
    }, 0);
}

function main(){ 
    partTwo();
    console.log(distance);

}

main();