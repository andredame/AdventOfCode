import fs from 'fs';

const input = fs.readFileSync('./inputs/input015.txt', 'utf8');

function partTwo() {
    let traverse = input.replace(/\r/g, '').split('\n').map((row) => row.split(''));
    let stack = [];
    let sum=0;
    for (let entryDirection of ['right', 'down', 'left', 'up']) {
        for (let startingPoint = 0; startingPoint < 110; startingPoint++) {
            let x, y, anteX, anteY;

            if (entryDirection === 'right') {
                x = startingPoint;
                y = 0;
                anteX = x;
                anteY = -1;
            } else if (entryDirection === 'down') {
                x = 0;
                y = startingPoint;
                anteX = -1;
                anteY = y;
            } else if (entryDirection === 'left') {
                x = traverse.length - 1;
                y = startingPoint;
                anteX = traverse.length;
                anteY = y;
            } else if (entryDirection === 'up') {
                x = startingPoint;
                y = traverse.length - 1;
                anteX = x;
                anteY = traverse.length;
            }
            
            
            let toGo = { x, y, anteX, anteY };
            stack.push(toGo);

            let visitedPositions = new Set();
            let result = Array.from({ length: traverse.length }, () => Array(traverse[0].length).fill('.'));
                while (stack.length > 0) {
                    let current = stack.pop();
                    if (visitedPositions.has(`${current.x}-${current.y}-${current.anteX}-${current.anteY}`) || 
                    current.x < 0 || 
                    current.y < 0 ||
                    current.x >= traverse[0].length || 
                    current.y >= traverse.length
                    ) {
                       continue;
                    }
                    
                    
                    visitedPositions.add(`${current.x}-${current.y}-${current.anteX}-${current.anteY}`);
                    result[current.y][current.x] = '#';
                    

                    if (traverse[current.y][current.x] === '.') {
                        
                        // Coming from left
                        if (current.anteX === current.x - 1 && current.anteY === current.y) {
                            let toGo = { x: current.x+1, y: current.y, anteX: current.x, anteY: current.y };
                            
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from right
                        if (current.anteX === current.x + 1 && current.anteY === current.y) {
                            let toGo = { x: current.x - 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                
                                stack.push(toGo);
                            }
                        }
                        // Coming from up
                        if (current.anteX === current.x && current.anteY === current.y - 1) {
                            
                            
                            let toGo = { x: current.x, y: current.y + 1, anteX: current.x, anteY: current.y };

                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                
                                stack.push(toGo);
                            }
                        }
                        // Coming from down
                        if (current.anteX === current.x && current.anteY === current.y + 1) {
                            let toGo = { x: current.x, y: current.y - 1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                    }        
                    if (traverse[current.y][current.x] === '|') {
                        // Coming from left
                        if (current.anteX === current.x - 1 && current.anteY === current.y) {
                            let toGo = { x: current.x, y: current.y + 1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                    
                            toGo = { x: current.x, y: current.y - 1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from right
                        if (current.anteX === current.x + 1 && current.anteY === current.y) {
                            let toGo = { x: current.x, y: current.y + 1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                    
                            toGo = { x: current.x, y: current.y - 1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from up
                        if (current.anteX === current.x && current.anteY === current.y - 1) {
                            let toGo = { x: current.x, y: current.y + 1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from down
                        if (current.anteX === current.x && current.anteY === current.y + 1) {
                            let toGo = { x: current.x, y: current.y - 1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                    }
                    
                    

                    if (traverse[current.y][current.x] === '-') {
                        // Coming from left
                        if (current.anteX === current.x - 1 && current.anteY === current.y) {
                            let toGo = { x: current.x + 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from right
                        if (current.anteX === current.x + 1 && current.anteY === current.y) {
                            let toGo = { x: current.x - 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from up
                        if (current.anteX === current.x && current.anteY === current.y - 1) {
                            let toGo = { x: current.x + 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                    
                            toGo = { x: current.x - 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from down
                        if (current.anteX === current.x && current.anteY === current.y + 1) {
                            let toGo = { x: current.x + 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                    
                            toGo = { x: current.x - 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                    }
                    
                    
                    

                    if (traverse[current.y][current.x] === '/') {
                        // Coming from left
                        if (current.anteX === current.x - 1 && current.anteY === current.y) {
                            let toGo = { x: current.x, y: current.y -1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from right
                        if (current.anteX === current.x + 1 && current.anteY === current.y) {
                            let toGo = { x: current.x, y: current.y +1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from up
                        if (current.anteX === current.x && current.anteY === current.y - 1) {
                            let toGo = { x: current.x - 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from down
                        if (current.anteX === current.x && current.anteY === current.y + 1) {
                            let toGo = { x: current.x + 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}`)) {
                                stack.push(toGo);
                            }
                        }
                    }
                    

                    if (traverse[current.y][current.x] === '\\') {
                        // Coming from left
                        if (current.anteX === current.x - 1 && current.anteY === current.y) {
                            let toGo = { x: current.x, y: current.y + 1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from right
                        if (current.anteX === current.x + 1 && current.anteY === current.y) {
                            let toGo = { x: current.x, y: current.y - 1, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from up
                        if (current.anteX === current.x && current.anteY === current.y - 1) {
                            let toGo = { x: current.x + 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                        // Coming from down
                        if (current.anteX === current.x && current.anteY === current.y + 1) {
                            let toGo = { x: current.x - 1, y: current.y, anteX: current.x, anteY: current.y };
                            if (!visitedPositions.has(`${toGo.x}-${toGo.y}-${toGo.anteX}-${toGo.anteY}`)) {
                                stack.push(toGo);
                            }
                        }
                    }
                    
                }
            let aux=0;
            for(let i=0;i<result.length;i++){
                for(let j=0;j<result[i].length;j++){
                    if(result[i][j] === '#'){
                        aux++;
                    }
                }
            }
            
            sum= aux>sum?aux:sum;
        }
    }
    return sum;
}
console.log(partTwo());