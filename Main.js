import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log(list.toString());

list.prepend(5);
console.log(list.toString());
console.log("Head:", list.head.value);
console.log("Tail:", list.tail.value);

console.log(list.at(2).value);

if (list.contains(20) !== undefined) console.log(true);

if (list.find(30) !== undefined) console.log(`found at ${list.find(30)[1]}`);

list.pop();
console.log(list.toString());

list.pop();
console.log(list.toString());

list.pop();
console.log(list.toString());

list.pop();
console.log(list.toString());

console.log("Size:", list.size);
console.log("Head:", list.head);
console.log("Tail:", list.tail);
