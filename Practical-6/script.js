let listItem = document.getElementById("list");

let btn = document.getElementById("btn")


function del() {
    console.log(listItem.selectedIndex);
    listItem.remove(listItem.selectedIndex)
}