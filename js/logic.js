const player2 = 'x';
const player1 = 'o';
const empty = '';
const players = [player1, player2];
let activePlayer = 0;
//let board;

// объявляем массив, переменную для символа и переменную для размера поля
let board = [];
let boardSize = prompt('Введите размер поля (максимальный размер — 6 на 6).\n\nСейчас установлено значение по умолчанию:', 4);

function startGame() {
    // заполняем массив пустыми значениями
    for (let i = 0; i < boardSize; i++) {
      board[i] = [];
        for (let j = 0; j < boardSize; j++) {
          board[i][j] = '';
    }
    }
    
    // отрисовываем поле
    renderBoard(board);
    
    // определяем случайного игрока
    activePlayer = Math.floor(Math.random() * players.length);
    alert('Начинает игрок с символом ' + players[activePlayer].toUpperCase() + '. Ваш ход!');
    }

function click(x, y) {
  //Проверяем можно ли походить в указанную клетку
  if (board[x][y] !== empty) {
    return;
  }
  // Ставим крестик или нолик
  board[x][y] = players[activePlayer];

  renderBoard(board);
  if (checkWinner(x, y)) {
//     showWinner(activePlayer);
//     return;
  }

  //Меняем текущего игрока
  activePlayer = (activePlayer + 1) % 2;
}

//Проверка победителя x y координаты последнего хода
/* function checkWinner(x, y) {
  return [    board[x],    board.map(value => value[y]),    board.map((value, index) => alue[index]),    board.map((value, index) => value[2 - index])
  ].map(    (value, index) => value.every(      v => (v === players[activePlayer])    )
  ).some(v => v);
} */ 

function checkWinner() {
  let winner = false;  // Есть победитель
  let winDiag1 = true; // Победа по одной диагонали
  let winDiag2 = true; // Победа по другой диагонали

  for (let i = 0; i < 3; i++) {
    let winRow = true; // Предполагаем что есть победитель по горизонтали
    let winCol = true; // Предполагаем что есть победитель по вертикали
    for (let j = 1; j < 3; j++) {
      // Проверка условий победы - сравниваем все элементы столбца или строки с первым элементом + проверяем чтобы первый элемент был в массиве игроков (то есть не пустой)
      // Проверка вертикальной победы
      winCol = winCol && (board[i][j] === board[i][0]) && (players.indexOf(board[i][0]) !== -1);
      // Проверка горизонртальной победы
      winRow = winRow && (board[j][i] === board[0][i]) && (players.indexOf(board[0][i]) !== -1);
    }
    // Проверка одной диагональной победы
    winDiag1 = winDiag1 && (board[i][i] === board[0][0]) && (players.indexOf(board[i][i]) !== -1);
    // Проверка другой диагональной победы
    winDiag2 = winDiag2 && (board[2 - i][i] === board[2][0]) && (players.indexOf(board[2 - i][i]) !== -1);
    // Если уже есть победа по горизонтали или вертикали - то дальше можно не проверять
    if (winCol || winRow) {
      winner = true;
      break;
    }
  }
  // Собираем в кучу все варианты победы
  winner = winner || winDiag1 || winDiag2;
  if (winner) {
    showWinner(activePlayer);
    return true;
  }
  return false;
}

/*
let players = ['x', 'o'];
let activePlayer;

// объявляем массив, переменную для символа и переменную для размера поля
let board = [];
let boardSize = prompt('Введите размер поля (максимальный размер — 6 на 6).\n\nСейчас установлено значение по умолчанию:', 4);

function startGame() {
// заполняем массив пустыми значениями
for (let i = 0; i < boardSize; i++) {
  board[i] = [];
    for (let j = 0; j < boardSize; j++) {
      board[i][j] = '';
}
}

// отрисовываем поле
renderBoard(board);

// определяем случайного игрока
activePlayer = Math.floor(Math.random() * players.length);
alert('Начинает игрок с символом ' + players[activePlayer].toUpperCase() + '. Ваш ход!');
}


function click(i, j) {
// устанавливаем для ячейки символ игрока и отрисовываем
board[i][j] = players[activePlayer];
renderBoard(board);

// проверяем выигрыш
topDiagonal = true; // диагональ из левого верхнего угла
bottomDiagonal = true; // диагональ из левого нижнего угла

for (let i = 0; i < board.length; i++) {
  topDiagonal = topDiagonal && (board[i][i] === players[activePlayer]); // если ячейки по диагонали состоят из символа игрока, диагональ принимает значение true
  bottomDiagonal = bottomDiagonal && (board[i][board.length-i-1] === players[activePlayer]); // аналогично для другой диагонали

  row = true; // для строки
  col = true; // для столбца
  for (let j = 0; j < board[i].length; j++) {
    row = row && (board[i][j] === players[activePlayer]);
    col = col && (board[j][i] === players[activePlayer]);
  }
  if ((row == true) || (col == true)) {
    showWinner(activePlayer); // если значения столбца или строки состоят из player, то объявляем победителя
  }
}
if ((topDiagonal == true) || (bottomDiagonal == true)) {
  showWinner(activePlayer); // если значения хотя бы одной диагонали состоят из player, тоже объявляем победителя
}

// если победителя пока нет, меняем игрока
activePlayer = (activePlayer + 1) % 2;

} */