import fs from 'fs';

const input = fs.readFileSync('./inputs/input015.txt', 'utf8');


function partOne(){
    let traverse =input.replace(/\r/g, '').split('\n').map((row) => row.split(''));

    let result = [];
    for(let i = 0; i < traverse.length; i++){
        result.push([]);
        for(let j = 0; j < traverse[i].length; j++){
            result[i].push(0);
        }
    }
    toGo(traverse,0,0,-1,0,true,result);
    console.log(result.join('\n'));
    return 'is not done yet';


}

function toGo(array,x,y,anteX,anteY,boolean,result){
    
    if( x<0 || y<0 || x>=array[0].length || y>=array.length ){
        return;
    }
    if(array[y][x] === '.'){
        //coming from left
        if(anteX === x-1 && anteY === y){
            result[y][x]++;
            toGo(array,x+1,y,x,y,boolean,result);
        }
        //coming from right
        if(anteX === x+1 && anteY === y){
            result[y][x]++;
            toGo(array,x-1,y,x,y,boolean,result); 
        }
        //coming from up
        if(anteX === x && anteY === y-1){
            result[y][x]++;
            toGo(array,x,y+1,x,y,boolean,result);
        }
        //coming from down
        if(anteX === x && anteY === y+1){
            result[y][x]++;
            toGo(array,x,y-1,x,y,boolean,result);  
        }
    }
    if (array[y][x] === '|'){
        //coming from left
        if(anteX === x-1 && anteY === y){
            result[y][x]++;
            toGo(array,x,y+1,x,y,boolean,result);
            toGo(array,x,y-1,x,y,boolean,result);
        }
        //coming from right
        if(anteX === x+1 && anteY === y){
            result[y][x]++;
            toGo(array,x,y+1,x,y,boolean,result);
            toGo(array,x,y-1,x,y,boolean,result);
        }
        //coming from up
        if(anteX === x && anteY === y-1){
            result[y][x]++;
            toGo(array,x,y+1,x,y,boolean,result);
        }
        //coming from down
        if(anteX === x && anteY === y+1){
            result[y][x]++;
            toGo(array,x,y-1,x,y,boolean,result);  
        }
    }
    if(array[y][x] === '-'){
        //coming from left
        if(anteX === x-1 && anteY === y){
            result[y][x]++; 
            toGo(array,x+1,y,x,y,boolean,result);
        }
        //coming from right
        if(anteX === x+1 && anteY === y){
            result[y][x]++; 
            toGo(array,x-1,y,x,y,boolean,result); 
        }
        //coming from up
        if(anteX === x && anteY === y-1){
            result[y][x]++;
            toGo(array,x-1,y,x,y,boolean,result);
            toGo(array,x+1,y,x,y,boolean,result);
        }
        //coming from down
        if(anteX === x && anteY === y+1){
            result[y][x]++;
            toGo(array,x-1,y,x,y,boolean,result);
            toGo(array,x+1,y,x,y,boolean,result);  
        }
        
    }
    if(array[y][x] === '\\'){
        //coming from left
        if((anteX === x-1 && anteY === y) ){
            result[y][x]++;
            toGo(array,x,y+1,x,y,boolean,result);
        }
        //coming from right
        if(anteX === x+1 && anteY === y){
            result[y][x]++;
            toGo(array,x,y-1,x,y,boolean,result); 
        }
        //coming from up
        if(anteX === x && anteY === y-1){
            result[y][x]++;
            toGo(array,x+1,y,x,y,boolean,result);
        }
        //coming from down
        if(anteX === x && anteY === y+1){
            result[y][x]++;
            toGo(array,x-1,y,x,y,boolean,result);  
        }
        
    }
    if(array[y][x] === '/'){
        //coming from left
        if(anteX === x-1 && anteY === y){
            result[y][x]++;
            toGo(array,x,y-1,x,y,boolean,result);
        }
        //coming from right
        if(anteX === x+1 && anteY === y){
            result[y][x]++;
            toGo(array,x,y+1,x,y,boolean,result); 
        }
        //coming from up
        if(anteX === x && anteY === y-1){
            result[y][x]++;
            toGo(array,x-1,y,x,y,boolean,result);
        }
        //coming from down
        if(anteX === x && anteY === y+1){
            result[y][x]++;
            toGo(array,x+1,y,x,y,boolean,result);  
        }
    }
}



function partTwo(){
    return 'is not done yet'
    
}

console.log('Part One:', partOne());
console.log('Part Two:', partTwo());
