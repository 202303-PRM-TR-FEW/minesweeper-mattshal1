function getSize(board) {
    return {
      rows: board.length,
      cols: board[0].length
    };
  }
  
  function inBounds(board, row, col) {
    const {rows, cols} = getSize(board);
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }
  
  function getAround(board, row, col) {
    let count = 0;
    
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
      
        if (inBounds(board, r, c) && board[r][c] === 1) {
          count++;
        }
      }
    }
    
    return count;
  }
  
  function getCounts(board) {
    const {rows, cols} = getSize(board);
    let newBoard = [];
    
    for (let r = 0; r < rows; r++) {
      let row = [];
      for (let c = 0; c < cols; c++) {
      
        if (board[r][c] === 1) {
          row.push(9);  
        } else {
          row.push(getAround(board, r, c));
        }
      }
      newBoard.push(row);
    }
  
    return newBoard;
  }
  
  function printBoard(board) {
    for (let row of board) {
      console.log(row.join(' '));
    }
  }
  
  let board = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0]  
  ];
  
  let counts = getCounts(board);
  printBoard(counts);