import fs, { read } from 'fs';
import readline from 'readline';

const readInterface = readline.createInterface({
    input: fs.createReadStream('inputs/input002.txt'),
    console: false
});
const cubes=[{color:'red', number:12},{color:'green', number:13},{color:'blue', number:14}];
let numberOfGamesValid=[];
let part02=[];
readInterface.on('line', (line) => {
    let colorsMinimum=[0,0,0]

    let boolean=true;
    let numberOfGame=line.slice(0,line.indexOf(': '));
    console.log(numberOfGame)
    numberOfGame=numberOfGame.split(' ')[1];
    //maximum 12 red cubes, 13 green cubes, and 14 blue cubes
    
    let setOfGames=line.slice(line.indexOf(': ')+1);
    setOfGames=setOfGames.split(';')
    setOfGames.forEach(game => {
        let gameArray=game.trim().split(',');
        gameArray.forEach(cube => {
            let partes=cube.trim().split(' ');
            let maximumNumber=Number(getNumberOfArray(partes[1]));
            if(colorsMinimum[getIndexOfArray(partes[1])]<partes[0]){


                colorsMinimum[getIndexOfArray(partes[1])]=Number(partes[0]);
            }
            if(maximumNumber<Number(partes[0])){
                boolean=false;
            }
        });    
    });
    if(boolean){
        numberOfGamesValid.push(numberOfGame);
    }
    let sum=1;
    console.log(colorsMinimum)
    colorsMinimum.forEach((element) => {
        sum*=element;
    });
    console.log(sum)
    part02.push(sum);


});

function getNumberOfArray(color) {
    let number = 0;
    for (let i = 0; i < cubes.length; i++) {
        if (cubes[i].color === color) {
            number = cubes[i].number;
            break; // Encontrou a correspondência, podemos interromper o loop
        }
    }
    return number;
}
function getIndexOfArray(color) {
    let index = -1;
    for (let i = 0; i < cubes.length; i++) {
        if (cubes[i].color === color) {
            index = i;
            break; // Encontrou a correspondência, podemos interromper o loop
        }
    }
    return index;
}
readInterface.on('close', () => {
    let sum=0;
    
    numberOfGamesValid.forEach(number => {
        sum+=Number(number);
    }
    );

    console.log("part 01");
    console.log(sum);
    console.log("part 02");
    sum=0;
    part02.forEach(number => {
        sum+=Number(number);
    }
    );
    console.log(sum);
});
