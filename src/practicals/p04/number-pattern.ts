// Write your code below
export {};

const input = process.argv[2];
const size = Number(input);

for (let i = 1; i <= size; i++) {
  let row = "";
  for (let j = size; j > i; j--) {
    row += " ";
  }
  for (let j = i; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}


//     1
//    21
//   321
//  4321
// 54321