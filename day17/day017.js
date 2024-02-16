import fs from 'fs';
import MinHeap  from './minHeap.js';
const input = fs.readFileSync('./inputs/input017.txt', 'utf8')
    .replace(/\r/g, '')
    .split('\n')
    .map(row => row.split('').map(Number));
    
function partOne(){
    let minHeap = new MinHeap();
    let visited = new Set();

    let goal = [input.length-1,input[0].length-1];
    
    
    
    while(minHeap.heap.length > 0){
        let {r,c,dRow,dCol,singleDir,heuristic,heat} = minHeap.remove();
        
        let key = `${r},${c},${dRow},${dCol}`;
        if(visited.has(key)) continue;
        visited.add(key);
        if(r === goal[0] && c === goal[1]){return heat;}

        let directions= [[-1, 0], [1, 0], [0, -1], [0, 1]];

        for(let direction of directions){
            let [dr,dc] = direction;
            let newRow = r + dr;
            let newCol = c + dc;

            if(newRow < 0 || newRow >= input.length || newCol < 0 || newCol >= input[0].length) continue;
            if(newRow === -dRow && newCol === -dCol) continue;

            if(dRow === direction[0] && dCol === direction[1]){
                if(singleDir>2){continue;}
                minHeap.add({
                    r:newRow,
                    c:newCol,
                    dRow:dr,
                    dCol:dc,
                    singleDir:singleDir+1,
                    heuristic:input[newRow][newCol]+distance([newRow,newCol],goal),
                    heat:heat+input[newRow][newCol]
                });
            }
            else{
                minHeap.add({
                    r:newRow,
                    c:newCol,
                    dRow:dr,
                    dCol:dc,
                    singleDir:0,
                    heuristic:input[newRow][newCol]+distance([newRow,newCol],goal),
                    heat:heat+input[newRow][newCol]
                });
            }
        }
    }    

}
function distance(p1,p2){
    return Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
}


function main(){
    console.log(partOne());
}
main();