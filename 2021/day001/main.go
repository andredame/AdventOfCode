package main

import (
	"bufio"
	"bytes"
	"fmt"
	"os"
	"strconv"
)
func check(e error) {
	if e != nil {
		panic(e)
	}
}
func main(){
	dat, err := os.ReadFile("./input.txt")
	check(err)
	scanner := bufio.NewScanner(bytes.NewReader(dat))

	var lines []int
	for scanner.Scan() {
        valor, err := strconv.Atoi(scanner.Text())
        check(err)
        lines = append(lines, valor)
    }
	//part One
	fmt.Println(lines)
	var count int = 0
	for i:=1; i<len(lines); i++{
		if(lines[i]>lines[i-1]){
			count++
		}
	}
	fmt.Println(count)

	//Part two Sliding Window Technique
	count =0
	var  lastWindow int 

	for i:=0;i<3;i++{
		lastWindow+=lines[i]
	}
	
	for i:=0;i<len(lines)-3;i++{
		if lastWindow < lastWindow +lines[3+i]-lines[i]{
			count++
		}
		lastWindow=lastWindow +lines[3+i]-lines[i]
	}

	fmt.Println(count)
	


}