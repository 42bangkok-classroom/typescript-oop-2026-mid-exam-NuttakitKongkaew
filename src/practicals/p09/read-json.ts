import * as fs from "fs";
const rawData = fs.readFileSync("product.json", "utf-8");
const product = JSON.parse(rawData);

function readJson(fileName: string): unknown[] {
    return product
}
console.log(readJson)
