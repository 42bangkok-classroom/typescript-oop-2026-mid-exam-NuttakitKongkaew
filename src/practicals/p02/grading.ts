// Write your code below
let input = process.argv.slice(2);
let n = Number(input[0]);
let raw = input[0];
if(raw == "" || raw == " "){
    console.log("Invalid Input");
    process.exit();
}
if(n >= 80 && n <= 100){
    console.log("Grade is A");
}else if (n >= 70 && n < 80){
    console.log("Grade is B");
}else if (n >= 60 && n < 70){
    console.log("Grade is C")
}else if (n >= 50 && n < 60){
    console.log("Grade is D");
}else if (n < 50 && n >= 0){
    console.log(`Grade is F`);
}else{
    console.log("Invalid Input")
}