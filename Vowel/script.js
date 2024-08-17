function countVowels(name) {
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of name.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

let userName = "Rajdeep";
let numberOfVowels = countVowels(userName);
console.log(`Number of vowels in the name: ${numberOfVowels}`); // Output: Number of vowels in the name: 3
