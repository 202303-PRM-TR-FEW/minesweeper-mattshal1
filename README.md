# Minesweeper Number of Neighbouring Mines

Create a function that takes an array representation of a Minesweeper board, and returns another board where the value of each cell is the amount of its neighboring mines.

**Notes:**
- Since in the output the numbers 0-8 are used to determine the amount of adjacent mines, the number 9 will be used to identify the mines instead.
- A Wikipedia page explaining how Minesweeper works is available in the [Resources tab](https://en.wikipedia.org/wiki/Minesweeper_(video_game)).

**Examples:**

**Input:**
```javascript
[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]
```
The 0 represents an empty space . The 1 represents a mine. You will have to replace each mine with a 9 and each empty space with the number of adjacent mines, the output will look like this:

**Output:**

```
[
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]
```

**To Run Your Code**

Open up a terminal in the CWD(Current Working Directory) and run `node index.js` or go ahead and install nodemon to run your code automatically continiously.
