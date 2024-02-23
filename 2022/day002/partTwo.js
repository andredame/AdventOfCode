import fs from 'fs';

const input = fs.readFileSync('./2022/day002/input.txt', 'utf8').replace(/\r/g, '').split('\n');

const main = () => {
    let result=0;
    input.forEach((line) => {
        let [otherPlay,myPlay] = line.split(' ');
        console.log(line,descrypt(otherPlay,myPlay))
        result+=descrypt(otherPlay,myPlay)
    });
    console.log(result);
};

const descrypt = (otherPlay,myPlay) => {
    if(myPlay === 'X') return toLose(otherPlay);
    if(myPlay === 'Y' ) {return toDraw(otherPlay)+3;}
    if(myPlay === 'Z' ) {return toWin(otherPlay)+6;}
};

function toDraw(otherPlay){
    if(otherPlay == 'A'){return 1;}
    if(otherPlay == 'B'){return 2;}
    if(otherPlay == 'C'){return 3;}
}

function toWin(otherPlay){
    if(otherPlay == 'A'){return 2;}//rock
    if(otherPlay == 'B'){return 3;}//paper
    if(otherPlay == 'C'){return 1;}//scissors
}
//rock (1) paper (2) scissors(3)
function toLose(otherPlay){
    if(otherPlay == 'A'){return 3;}//rock
    if(otherPlay == 'B'){return 1;}//paper
    if(otherPlay == 'C'){return 2;}//scissors
}
main();