import fs from 'fs';
import { get } from 'http';

const input = fs.readFileSync('2022/day003/input.txt', 'utf8').replace(/\r/g, '').split('\n');


function main(){
    let result = 0;
    for(let i=0;i<input.length;i+=3){
        let firstLine=new Array (26+26);
        let secondLine=new Array (26+26);
        for(let j=0;j<input[i].length;j++){
            firstLine[getAsciiCode(input[i][j])]=input[i][j]
        }
        for(let j=0;j<input[i+1].length;j++){
            if(firstLine[getAsciiCode(input[i+1][j])]){
                secondLine[getAsciiCode(input[i+1][j])]=input[i+1][j]
            }
        }
        for(let j=0;j<input[i+2].length;j++){
            if(secondLine[getAsciiCode(input[i+2][j])]){
                result+=getAsciiCode(input[i+2][j]);
                break;
            }
        }
    }
    console.log(result)

    

}

function getAsciiCode(char) {
    if(char === char.toUpperCase() ){return char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 27;}
    return char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}



main();