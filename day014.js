import fs from 'fs';
const input = fs.readFileSync('./inputs/input014.txt', 'utf8').replace(/\r/g, '').split('\n');

function tiltToNorth(array,i,j){

    if(i-1<0 || array[i-1][j] === '#' || array[i-1][j] === 'O'){
        return;
    }
    array[i-1][j] = 'O';
    array[i][j] = '.';
    tiltToNorth(array,i-1,j);
    
}

function tiltToSouth(array,i,j){
    if(i+1>=array.length || array[i+1][j] === '#' || array[i+1][j] === 'O'){
        return;
    }
    array[i+1][j] = 'O';
    array[i][j] = '.';
    tiltToSouth(array,i+1,j);
}

function tiltToWest(array,i,j){
    if(j-1<0 || array[i][j-1] === '#' || array[i][j-1] === 'O'){
        return;
    }
    array[i][j-1] = 'O';
    array[i][j] = '.';
    tiltToWest(array,i,j-1);
    
}

function tiltToEast(array,i,j){
    if(j+1>=array[i].length || array[i][j+1] === '#' || array[i][j+1] === 'O'){
        return;
    }
    array[i][j+1] = 'O';
    array[i][j] = '.';
    tiltToEast(array,i,j+1);
    
}

function partOne(){
    input.forEach((line,element)=>{
        input[element]=line.split('');
    });
    for(let i=0;i<input.length;i++){
        for(let j=0;j<input[i].length;j++){
            if(input[i][j] === 'O'){

                tiltToNorth(input,i,j);
            }
        }
    }
    input.forEach((line,element)=>{
        input[element]=line.join('');
    });
    let total=0;
    //The amount of load caused by a single rounded rock (O) is equal to the number of rows from the rock to the south edge of the platform, including the row the rock is on. (Cube-shaped rocks (#) don't contribute to load.) So, the amount of load caused by each rock in each row is as follows:
   for(let i=0;i<input.length;i++){
       for(let j=0;j<input[i].length;j++){
              if(input[i][j] === 'O'){
               total += input.length-i;
           }
       }
   }
   return total;
}
function longest(array) {
    let result = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let offset = 0;
            for (; offset + j < array.length; offset++) {
                if (array[i + offset] !== array[j + offset]) break;
            }
            if (result.length < offset) result = array.slice(i, i + offset);
        }   
    }
    return result;
 }

function partTwo(){
    let platform = input;
    const[sizeX,sizeY] = [platform[0].length,platform.length];
    platform.forEach((line,element)=>{
        platform[element]=line.split('');
    });
    //set seen
    let numberOfCycle = 0;
    let total=0;
    let numbers=[];
    let indexOfTotal=(1000000000%14);
    console.log(indexOfTotal);
    
    
    

    while(numberOfCycle!==200){
        for(let i=0;i<platform.length;i++){
            for(let j=0;j<platform[i].length;j++){
                if(platform[i][j] === 'O'){
                    tiltToNorth(platform,i,j);
                }
            }
        }
        for(let i=0;i<platform.length;i++){
            for(let j=0;j<platform[i].length;j++){
                if(platform[i][j] === 'O'){
                    tiltToWest(platform,i,j);
                }
            }
        }
        for(let i=0;i<platform.length;i++){
            for(let j=0;j<platform[i].length;j++){
                if(platform[sizeY-1-i][j] === 'O'){
                    tiltToSouth(platform,sizeY-1-i,j);
                }
            }
        }
        for(let i=0;i<platform.length;i++){
            for(let j=0;j<platform[i].length;j++){
                if(platform[i][sizeX-1-j] === 'O'){
                    tiltToEast(platform,i,sizeX-1-j);
                }
            }
        }
        total=0;
        for(let i=0;i<input.length;i++){
            for(let j=0;j<input[i].length;j++){
                if(input[i][j] === 'O'){
                    total += input.length-i;
                }
            }
        }
        
        numbers.push(total);
        numberOfCycle++;
    }
    return longest(numbers)[(1000000000-103)%14];
    
}
console.log(partTwo());