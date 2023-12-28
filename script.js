const DEFAULT_GRID_SIZE = 16;

let mode = "solid";

const gridElem = document.querySelector("#grid");

function resetGrid(width = DEFAULT_GRID_SIZE) {
  gridElem.innerHTML = "";

  modeInput = document.querySelector(`#mode-${mode}`);
  modeInput.checked = true;

  for (let i = 1; i <= width; i++) {
    let currentRow = addRow(i);

    for (let j = 1; j <= width; j++) {
      addCell(i, j, currentRow);
    }
  }
}

function addRow(num, parent = gridElem) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.id = `row${num}`;

  parent.appendChild(row);

  return row;
}

function addCell(x, y, parent) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = `x${x}y${y}`;

  cell.addEventListener("mouseover", () => fillCell(cell))

  parent.appendChild(cell);

  return cell;
}

function fillCell(cell) {
  cell.classList.add("filled");

  switch (mode) {
    case "solid":
      cell.style.backgroundColor = `hsl(0, 0%, 10%)`;
      break;
    case "rainbow":
      const randomHue = Math.floor(Math.random() * 255);
      cell.style.backgroundColor = `hsl(${randomHue}, 100%, 50%)`;
      break;
    // case "darken":
    //   break;
  }
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => doResetClick())

function doResetClick() {
  let gridSize = prompt("Enter a grid size from 1 to 100");

  if (gridSize < 1 || gridSize > 100) {
    gridSize = prompt("Invalid size. Enter a grid size from 1 to 100");
  }

  return resetGrid(gridSize);
}

const modeButtonSolid = document.querySelector("#mode-solid");
modeButtonSolid.addEventListener("click", () => mode = "solid")

const modeButtonRainbow = document.querySelector("#mode-rainbow");
modeButtonRainbow.addEventListener("click", () => mode = "rainbow")

resetGrid();
