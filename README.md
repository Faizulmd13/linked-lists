# Linked List Project

This project is part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

The goal of this project is to build a **Linked List** data structure from scratch using ES6 classes and modules.  
It helps in understanding nodes, references, and list operations.

## Features

- **Node Class** – represents a single node with a value and a pointer to the next node.
- **LinkedList Class** – manages the list and provides useful methods:
  - `append(value)` – add a node to the end of the list  
  - `prepend(value)` – add a node to the start of the list  
  - `at(index)` – return the node at a specific index  
  - `pop()` – remove the last node from the list  
  - `contains(value)` – check if a value exists in the list  
  - `find(value)` – return the node and index if a value exists  
  - `insertAt(value, index)` – insert a value at a specific index  
  - `removeAt(index)` – remove a node at a specific index  
  - `toString()` – get a string representation of the list

## Files

- `Node.js` – defines the Node class  
- `LinkedList.js` – defines and exports the LinkedList class  
- `Main.js` – demonstrates all LinkedList methods

## How to Run

1. Make sure your environment supports ES Modules (add `"type": "module"` in your `package.json`).
2. Run the program with:

   ```bash
   node Main.js
