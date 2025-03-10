const animals = [];

// array shine element nemeh- togsgold n
animals.push("Bear");
animals.push("Dog");
animals.push("Mouse");
animals.push("Horse");

// array shine element nemeh- ehend n
animals.push("Cat");
animals.push("Fish");

//["Fish", "Cat", "Bear", "Dog"]

console.log("ani", animals);
const ani = animals.pop();
console.log("ani", animals);
animals.shift();
console.log("ani", animals);

const res = animals.toString();
console.log("res", res);
const res2 = animals.join("-");
console.log("res2", res2);
const res3 = animals.indexOf("Fish");
console.log("fish", res3);
animals[res3] = "Sheep";
console.log("res3", res3);
console.log("res", animals);

const res5 = animals.slice(0, 2);
console.log(res5);
console.log("ani", animals);

const res6 = animals.splice(1, 1);
console.log(res6);
console.log("ani", animals);

const res7 = animals.splice(2, 0, "Goat");
console.log(res7);
console.log("ani", animals);

const input1 = [1, 2, 4];
const input2 = input1.push("5");
console.log(input1);

const input = "the quick brown fox";
const input3 = input.toLocaleUpperCase();
console.log(input3);

const element = ["hello", "world", "javascript", "array"];
const arr2 = element.reverse();
console.log(arr2);

const newArr = [];
for (const word of element) {
  const revArr = word.split("").reverse().join("");
  newArr.push(revArr);
}

console.log(newArr);
