import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
console.log("After append:", list.toString());

list.prepend(5);
console.log("After prepend:", list.toString());

console.log("Node at index 2:", list.at(2)?.value ?? "Not found");

const contains20 = list.contains(20);
console.log("Contains 20:", contains20 ? `Yes, at index ${contains20[1]}` : "No");

const find30 = list.find(30);
console.log("Find 30:", find30 ? `Found at index ${find30[1]}` : "Not found");

list.insertAt(15, 2);
console.log("After insert 15 at index 2:", list.toString());

list.removeAt(3);
console.log("After remove at index 3:", list.toString());

list.pop();
console.log("After pop:", list.toString());

list.pop();
console.log("After pop:", list.toString());

list.pop();
console.log("After pop:", list.toString());

list.pop();
console.log("After pop:", list.toString());

console.log("Final List size:", list.size);
console.log("Head:", list.head);
console.log("Tail:", list.tail);
