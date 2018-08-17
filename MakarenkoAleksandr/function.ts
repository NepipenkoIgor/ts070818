import { Component } from '@angular/core';

function isInArray(array:string[], ...args:string[]) : boolean
{
    let result : boolean;
    args.forEach(elementArg => {
        result = array.includes(elementArg);
    });   
    return result;
}

var names:string[] = new Array("Mary","Tom","Jack","Jill");
console.log("isInArray " + isInArray(names, "Mary", "Tom", "Jack2"));

function summator(...args:(string|number)[]) : number
{
  let result : number = 0;
  args.forEach(element =>{
    if(typeof element === "number" && !isNaN(element))
      result += element
    else if(typeof element === "string")
      if(!isNaN(Number.parseInt(element)))
        result += Number.parseInt(element)
  })
  return result;
}
console.log("Summ "  + summator(1,2,'3', 4, 5).toString());

function getUniq(...args:(number)[]) : number[]
{
  return Array.from(new Set(args));
}

console.log(getUniq(8,1,1,2,3,5,6,6,7));
