import fs from 'fs';

const input = fs.readFileSync('./2023/inputs/input021.txt', 'utf8').replace(/\r/g, '').split('\n').map((row) => row.split(''));

//
var grid=[];

function fillGrid(){
    for(let i=0;i<input.length;i++){
        grid[i]=[];
        for(let j=0;j<input[i].length;j++){
            grid[i][j]=input[i][j];
        }
    }
}

function findPosition(grid, target) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === target) {
                return { x: j, y: i};
            }
        }
    }
    return null; 
}

var sPosition = findPosition(input, 'S');



function partOne(maxSteps){
    let stack = [];
    let queue = [];
    stack.push(sPosition);
    let step=0;


    while(step<maxSteps){
        
        
        let current = stack.pop();

        let x= current.x;
        let y= current.y;
        grid[y][x]='.';
        

        let n=tryWalk(x+1,y);
        let s=tryWalk(x-1,y);
        let e=tryWalk(x,y+1);
        let w=tryWalk(x,y-1);


        if(n!==undefined){queue.push(n);}
        if(s!==undefined){queue.push(s);}
        if(e!==undefined){queue.push(e);}
        if(w!==undefined){queue.push(w);}
        
        if(stack.length===0){stack=queue;queue=[];step++;}
        
    
    }
    return grid.join('\n');

    
}

function tryWalk(j,i) {
    if(j<0){return}
    if(i<0){return}
    if(j>=grid[0].length){return}
    if(i>=grid.length){return}
    if(grid[i][j]==='.'){grid[i][j]='O';return { x:j,y:i }}
    return;
}


function countPlot(){
    let count=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==='O'){count++;}
        }
    }
    return count;

}

///////part 2

function main() {
    fillGrid();

    ////////part 1
    partOne(10);
    console.log(countPlot());

    ////////part 2
    fillGrid();



}



main();