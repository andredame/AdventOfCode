import fs from 'fs';

const input = fs.readFileSync('./inputs/input015.txt', 'utf8');

function partOne() {
    let traverse = input.replace(/\r/g, '').split('\n').map((row) => row.split(''));
    let stack = [];
    let result = [];

    for (let i = 0; i < traverse.length; i++) {
        result.push([]);
        for (let j = 0; j < traverse[i].length; j++) {
            result[i].push('.');
        }
    }    
        let toGo = { x: 0, y: 0, anteX: -1, anteY: 0 };
        stack.push(toGo);
        let visitedPositions = new Set();

        while (stack.length > 0) {
            
            let current = stack.pop();

            if (current.x < 0 || current.y < 0 || current.x >= traverse[0].length || current.y >= traverse.length ||visitedPositions.has(`${current.x}-${current.y}-${current.anteX}-${current.anteY}`) ) {
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
        let sum=0;
        for(let i=0;i<result.length;i++){
            for(let j=0;j<result[i].length;j++){
                if(result[i][j] === '#'){
                    sum++;
                }
            }
        } 
        return sum;
        
    
}


console.log(partOne());

