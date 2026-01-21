// Write your code below
export{}
const input = process.argv[2];
const size = Number(input);

for(let i =1 ; i<size-1 ; i++ ) {
  let row = ""
  for(let j =0 ; j<size ; j++ ){
    row += i
  }
  console.log(row);
}
// j=4 i=1