// JavaScript 文件用于实现 2048 游戏的逻辑

// 获取游戏容器元素
const gameContainer = document.getElementById("game");

// 创建游戏棋盘
const size = 4; // 棋盘大小
const board = [];
for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
        board[i][j] = 0;
    }
}

// 随机生成一个新的数字
function generateNewNumber() {
    const emptyCells = [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[i][j] === 0) {
                emptyCells.push({ row: i, col: j });
            }
        }
    }
    if (emptyCells.length === 0) return;
    const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[row][col] = Math.random() < 0.9 ? 2 : 4;
}

// 初始化游戏
function initGame() {
    for (let i = 0; i < 2; i++) {
        generateNewNumber();
    }
    renderBoard();
}

// 渲染游戏棋盘
function renderBoard() {
    gameContainer.innerHTML = ""; // 清空原内容
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = board[i][j] !== 0 ? board[i][j] : "";
            gameContainer.appendChild(cell);
        }
    }
}

// 监听键盘事件
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveLeft();
    } else if (event.key === "ArrowRight") {
        moveRight();
    } else if (event.key === "ArrowUp") {
        moveUp();
    } else if (event.key === "ArrowDown") {
        moveDown();
    }
});

// 初始化游戏
initGame();
