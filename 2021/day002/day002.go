package main

import (
	"bufio"
	"bytes"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}
func readFile(lines *[]string, scanner *bufio.Scanner) {
	for scanner.Scan() {
		valor := scanner.Text()
		*lines = append(*lines, valor)
	}
}

func splitLine(line string) (string, int) {
	split := strings.Split(line, " ")
	direction := split[0]
	num, err := strconv.Atoi(split[1])
	check(err)
	return direction, num
}

func main(){
	dat, err := os.ReadFile("input002.txt")
	check(err)
	scanner := bufio.NewScanner(bytes.NewReader(dat))
	var lines []string
	readFile(&lines,scanner)
	depth,horizontal,aim:= 0,0,0
	for i:=0;i<len(lines);i++{
		direction,num := splitLine(lines[i])
		moveSubmarine(direction,num,&depth,&horizontal,&aim)
	}
	fmt.Println(depth*horizontal)
	

}

func moveSubmarine(direction string,num int,depth *int,horizontal*int,aim*int){
	if direction == "forward"{
		*horizontal+=num
		*depth+= ( *aim * num)
	}
	if direction == "up"{
		*aim-=num
	}
	if direction == "down"{
		*aim+=num
	}
	
}

