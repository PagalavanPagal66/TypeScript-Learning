console.log("Hello-world");
let age: number = 20;
if(age>50){
    console.log("HIGH");
}
else{
    console.log("LOW");
}

let number = [1,'2',3];

let array : (string|number)[] = [1,2,"ok"];

array?.[0];

function Func(num? : number): number{
    let x;
    return 0;
}


let dict :{
    readonly id : number,
    name : string
} = {
    id : 1,
    name : ""
}

type Sample = {
    readonly roll : number,
    name : string,
    taking : (num : number) => string
}

let sample : Sample = {
    roll : 100,
    name : "Pagal",
    taking : (age : number){
        return "AGE : "+age;
    }
}

