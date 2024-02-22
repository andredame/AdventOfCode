import fs from 'fs';
import { stdout } from 'process';

const input = fs.readFileSync('./2023/inputs/input011.txt', 'utf-8').replace(/\r/g, '').split('\n').map((line) => line.split(''));

var HEIGHT = input.length;
var WIDTH = input[0].length;




function findMinimumDistance(pointA, pointB) {
    const xDistance = Math.abs(pointA.x - pointB.x);
    const yDistance = Math.abs(pointA.y - pointB.y);
    return xDistance + yDistance;
}

function findAllGalaxies(input){
    let count=0;
    const galaxies = [];
    for (let y = 0; y < input.length; y++) {
        const row = input[y];
        for (let x = 0; x < row.length; x++) {
            const cell = row[x];
            if (cell === '#') {
                galaxies.push({x, y});
            }
        }
    }
    return galaxies;

}
function solution(numberOfTimes){
    let total=0;
    
    const galaxies = findAllGalaxies(input);
    const before=galaxies.map((galaxy) => {
        return {x:galaxy.x,y:galaxy.y};
    });
    let rowEmpty=[];
    for (let i = 0; i < HEIGHT; i++) {
        if (input[i].join('').indexOf('#') === -1) {
            
            rowEmpty.push(i);
            
        }

    }
    galaxies.forEach((galaxy) => {
        let count=0;
        rowEmpty.forEach((row) => {
            if(galaxy.y>row){
                count+=numberOfTimes;
            }
        });
        galaxy.y+=count;
    });
    let columnsEmpty=[];
    for(let i = 0; i < HEIGHT; i++) {
        let column = input.map((row) => row[i]).join('');
        if(column.indexOf('#') === -1) {columnsEmpty.push(i);}
    }
    galaxies.forEach((galaxy) => {
        let count=0;
        columnsEmpty.forEach((column) => {
            if(galaxy.x>column){
                count+=numberOfTimes;
            }
        });
        galaxy.x+=count;
    });
    
    


    for(let i=0;i<galaxies.length-1;i++){
        let currentGal=galaxies[i];
        for(let j=i+1;j<galaxies.length;j++){
            total+=findMinimumDistance(currentGal,galaxies[j]);
        }
    }
    return total;

}

function main(){
    console.log('Part One :',solution(1));
    console.log('Part Two :',solution(1000000-1));

}
main();