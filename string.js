console.log("string");

const text = "Hello Pinecone. Welcome to world of JS";
console.log(text[0]);

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

for (let char of text) {
  console.log(char); // ugiig n ogno
}

for (let i in text) {
  console.log(text[i]); // index iig n ogno
}


const str4 = "arvan tavan targan tarvaga" 
const word = str4.split(" ");
console.log(word);
console.log(word[3]);


for ( let i = 0; i < word.length; i++ ) {
  console.log(word[i]);
  
}

const chars = str4.split ('')
for (char of chars) {
} console.log(chars[3]);

const chars1 = str4.split('').reverse().join('');
console.log('reversed', chars1);
console.log('4th', chars1[3]);



 



console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.endsWith(0));
console.log(text.includes("Pinecone"));

const str = " Hello String Pinecone";

console.log(str.trim());
console.log(str.replace("Hello", "Welcome"));

const newStr = str.replace("Hello", "Welcome");
console.log(newStr);

const arr = str.trim().replace("Hello", "Welcome");

console.log(str.split("String"));

console.log(str.substring("hello"));

const subStr = str.substring(5, 12);
console.log(subStr);

const i = str.indexOf("Pinecone");
console.log(i);
console.log(str.substring(i, i + 8));

const str1 = " Welcome";
const str2 = "Pinecone";
const str3 = "Academy ";

const myConcat = (...params) => {
  console.log(params);
  return str1 + str2 + str3;
};

const result = myConcat("hello", "pinecone", "Academy");
console.log(result);

const myConcat1 = (...params) => {
  const res = " ";

  for (let param of params) {
    res = res + params[i];
  }
  return res;
};

// str1 = str1.toLowerCase("");
console.log(str1);

const isExistChar = (text, char) => {
  for (let char of text) {
    if (text[i] === char) {
      return true;
    }
  }
  return false;
};

const indexOf = (text, char) => {
  for (let char of text) {
    if (text[i] === char) {
      return i;
    }
  }
  return -1;
};
const res = indexOf("Hello Pinecone", "K");
console.log("Hello Pinecone");
console.log(res);

// console.log(char);

// const myConcat = (str1, str2, str3) => {
//     console.log(str1, str2, str3);
//     return str1 + str2 + str3;
//   };
//   const result = myConcat("hello", "pinecone", "Academy");
//   console.log(result);
