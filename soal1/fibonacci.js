function fibonacciTable(rows, columns) {
  let fib = [0, 1];
  for (let i = 2; i < rows * columns; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  let table = [];
  for (let i = 0; i < rows; i++) {
    let row = fib.slice(i * columns, (i + 1) * columns);
    table.push(row);
  }

  return table;
}

document
  .getElementById("fibonacciForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);

    const table = fibonacciTable(rows, columns);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    const htmlTable = document.createElement("table");
    htmlTable.border = "1";

    table.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      htmlTable.appendChild(tr);
    });

    resultDiv.appendChild(htmlTable);
  });
