let table = document.getElementById("tbl")
// console.log(table);

function addRow() {
    // console.log(table.innerHTML);
    let newR = table.insertRow(2)
    let newC = newR.insertCell(0)
    let cell1 = newR.insertCell(1)
    let cell2 = newR.insertCell(2)
    newC.innerHTML = "Me"
    cell1.innerHTML = "000"
    cell2.innerHTML = "777"

    // newC.innerHTML = "new cell"
}