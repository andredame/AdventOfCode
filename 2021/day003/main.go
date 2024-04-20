package main

import (
	// ""
	"bufio"
	"bytes"
	"fmt"
	"os"
	"strconv"
)
func check(e error){
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

func main(){
	dat,err :=os.ReadFile("input.txt")
	check(err)
	scanner := bufio.NewScanner(bytes.NewReader(dat))
	var lines[]string
	readFile(&lines,scanner)
	var mostCommon string
	for j:=0;j<len(lines[j]);j++{
		countOne,countZero :=0,0
		for i:=0;i<len(lines);i++{
			if(lines[i][j]=='1'){
				countOne++
			}
			if(lines[i][j]=='0'){
				countZero++
			}
		}
		if countOne > countZero {
            mostCommon += "1"
        }
        if countZero > countOne {
            mostCommon += "0"
        }
	}
	gamma,epsilon := converBynaryToInt(mostCommon),converBynaryToInt(getInverseNumber(mostCommon))
	fmt.Println(gamma*epsilon)
}
func converBynaryToInt(num string) int64{
	result,err:= strconv.ParseInt(num, 2, 32)
	check(err)
	return result
}

func getInverseNumber(number string)(string){
	var result string
	for i:=0;i<len(number);i++{
		bit :=int(number[i]-'0')
		result+=strconv.Itoa(bit^1)
	}
	return result
}
