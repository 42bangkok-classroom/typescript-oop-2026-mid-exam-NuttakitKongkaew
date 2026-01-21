const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  // Write your code below
  const words = comment.split(" "); 
  const filteredWords = words.filter(word => word.length >= 5 && word.length <= 10);  
  return filteredWords.length > 0 ? filteredWords.join(" ") : "";
  }
console.log(shortenComment(comment)); 
  

