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

// "c01": "B",
//   "c02": "A",
//   "c03": "C",
//   "c04": "B",
//   "c05": "B",
//   "c06": "C",
//   "c07": "A",
//   "c08": "D",
//   "c09": "A",
//   "c10": "A",
//   "c11": "B",
//   "c12": "C",
//   "c13": "C",
//   "c14": "B",
//   "c15": "C",
//   "c16": "C",
//   "c17": "D",
//   "c18": "C",
//   "c19": "C",
//   "c20": "C",
// }