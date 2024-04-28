// 定义游戏棋盘大小
const size = 4;

// 创建一个新的游戏棋盘
const board = [];
for (let i = 0; i < size; i++) {
    board.push(new Array(size).fill(0));
}

// 随机在空白位置生成一个新的数字
function generateNewNumber() {
    const emptyCells = [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[i][j] === 0) {
                emptyCells.push({ row: i, col: j });
            }
        }
    }
    if (emptyCells.length === 0) return; // 没有空白位置了
    const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[row][col] = Math.random() < 0.9 ? 2 : 4; // 90%的概率生成2，10%的概率生成4
}

// 初始化游戏
function initGame() {
    generateNewNumber();
    generateNewNumber();
    renderBoard();
}

// 渲染游戏棋盘
function renderBoard() {
    // 清空原有内容
    const gameContainer = document.getElementById("game");
    gameContainer.innerHTML = "";

    // 创建并渲染每个方格
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = board[i][j] === 0 ? "" : board[i][j];
            gameContainer.appendChild(cell);
        }
    }
}

// 处理向左移动操作
function moveLeft() {
    let moved = false;
    for (let i = 0; i < size; i++) {
        for (let j = 1; j < size; j++) {
            if (board[i][j] !== 0) {
                let k = j - 1;
                while (k >= 0 && (board[i][k] === 0 || board[i][k] === board[i][j])) {
                    if (board[i][k] === board[i][j]) {
                        board[i][k] *= 2;
                        board[i][j] = 0;
                        moved = true;
                        break;
                    }
                    if (board[i][k] === 0) {
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        moved = true;
                    }
                    k--;
                }
            }
        }
    }
    if (moved) generateNewNumber
