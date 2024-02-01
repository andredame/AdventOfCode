import fs from 'fs';
import PriorityQueue from 'js-priority-queue';

const input = fs.readFileSync('./inputs/input017.txt', 'utf8').replace(/\r/g, '').split('\n').map((row) => row.split(''));


function heuristic(position,target){
    return Math.abs(position.x - target.x) + Math.abs(position.y - target.y);
}

function partOne(){


}

function aStarSearch(start,target,grid){
    const frontier = new PriorityQueue({comparator: (a,b) => a.priority - b.priority});
    frontier.queue({position: start, priority: 0});
    const cameFrom = {};
    const costSoFar = {};
    cameFrom[start] = null;
    costSoFar[start] = 0;
    while(frontier.length > 0){
        const current = frontier.dequeue().position;
        if(current === target){
            break;
        }
        for(const next of neighbors(current,grid)){
            const newCost = costSoFar[current] + 1;
            if(!(next in costSoFar) || newCost < costSoFar[next]){
                costSoFar[next] = newCost;
                const priority = newCost + heuristic(next,target);
                frontier.queue({position: next, priority: priority});
                cameFrom[next] = current;
            }
        }
    }
   
}

function neighbors(position,grid){
    
}



function main(){
    console.log('Part 01',partOne());
}
main();