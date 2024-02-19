import fs from 'fs';
import MinHeap  from './minHeap.js';

//reference : https://www.youtube.com/watch?v=HLdEpEn1Q9g&t=547s
const input = fs.readFileSync('./inputs/input017.txt', 'utf8')
    .replace(/\r/g, '')
    .split('\n')
    .map(row => row.split('').map(Number));
    
function partOne(){
    let minHeap = new MinHeap();
    let visited = new Set();

    let goal = [input.length-1,input[0].length-1];
    minHeap.add({
        r:0,
        c:0,
        dRow:0,
        dCol:0,
        heat:0,
        s:0,
    });
    while(minHeap.heap.length){
        
        let {r,c,dRow,dCol,heat,s} = minHeap.remove();
        
        
        let key = `${r},${c},${dRow},${dCol},${s}`;
        if(visited.has(key)) continue;
        if(r === goal[0] && c === goal[1]){return heat;}
        visited.add(key);
        
        let directions= [[-1, 0], [1, 0], [0, -1], [0, 1]];

        for(let direction of directions){

            let [dr,dc] = direction;
            let newRow = r + dr;
            let newCol = c + dc;

            if(newRow < 0 || newRow >= input.length || newCol < 0 || newCol >= input[0].length) continue;
            if(newRow == -dRow && newCol == -dCol) continue;

            if(dRow === dr && dCol === dc){
                if(s>2){continue;}
                minHeap.add({
                    r:newRow,
                    c:newCol,
                    dRow:dr,
                    dCol:dc,
                    heat:heat+input[newRow][newCol],
                    s:++s,
                });
            }
            else{
                minHeap.add({
                    r:newRow,
                    c:newCol,
                    dRow:dr,
                    dCol:dc,
                    heat:heat+input[newRow][newCol],
                    s:1,
                });
            }
        }
    }    
}



function main(){
    console.log(partOne());
}
main();