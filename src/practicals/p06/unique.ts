export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const combinedArray = [...arr1, ...arr2];
  const uniqueNumbers: number[] = [];
  for (let i = 0; i < combinedArray.length; i++) {
    const current = combinedArray[i];

    let count = 0;
    for (let j = 0; j < combinedArray.length; j++) {
        if (combinedArray[j] === current) {
            count++;
        }
    }


    if (count === 1) {
        uniqueNumbers.push(current);
    }
}

return uniqueNumbers;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const uniqueNumbers = getUniqueNumbers(arr1, arr2);
console.log(uniqueNumbers);







