const WIDTH = 16;

const gridElem = document.querySelector("#grid");

function resetGrid(width = WIDTH) {
  for (let i = 1; i <= width; i++) {
    addRow(i);

    let currentRow = document.querySelector(`#row${i}`);
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
}

function addCell(x, y, parent) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = `x${x}y${y}`;

  cell.addEventListener("mouseover", () => fillCell(cell))

  parent.appendChild(cell);
}

function fillCell(cell) {
  cell.classList.add("filled");
}

resetGrid();
