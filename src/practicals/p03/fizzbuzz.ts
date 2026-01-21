// Write your code below
export{};
let input = process.argv.slice(2);
let n = Number(input[0]);
let raw = input[0];
if(raw == "" || raw == " "){
    console.log("Invalid input");
    process.exit();
}
for(let i = 1;i <= n ;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if (i % 3 === 0){
        console.log("Fizz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(String(i));
    }
}