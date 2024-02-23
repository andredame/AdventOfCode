import fs from 'fs';

const input = fs.readFileSync('./2022/day002/input.txt', 'utf8').replace(/\r/g, '').split('\n');

const main = () => {
    let result=0;
    input.forEach((line) => {
        let [otherPlay,myPlay] = line.split(' ')
        result+=findWinner(otherPlay,myPlay);
    });
    console.log(result);
};

const descrypt = (play) => {
    if(play === 'X'|| play ==='A') return 'rock';
    if(play === 'Y' || play ==='B')  return 'paper';
    if(play === 'Z' || play ==='C') return 'scissors';
};

function findWinner (otherPlay, myPlay) {
    otherPlay=descrypt(otherPlay);
    myPlay=descrypt(myPlay);

    if(otherPlay === myPlay) return valueOfPlay(myPlay)+3;
    if(otherPlay === 'rock' && myPlay === 'scissors') return valueOfPlay(myPlay);
    if(otherPlay === 'rock' && myPlay === 'paper') return valueOfPlay(myPlay)+6;
    if(otherPlay === 'paper' && myPlay === 'rock') return valueOfPlay(myPlay);
    if(otherPlay === 'paper' && myPlay === 'scissors') return valueOfPlay(myPlay)+6;
    if(otherPlay === 'scissors' && myPlay === 'rock') return valueOfPlay(myPlay)+6;
    if(otherPlay === 'scissors' && myPlay === 'paper') return valueOfPlay(myPlay);

}

function valueOfPlay(play) {
    
    if(play === 'rock') return 1;
    if(play === 'paper')  return 2;
    if(play === 'scissors') return 3;
    return 0;
}





main();