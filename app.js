const table = document.getElementById("pixelCanvas"); //retrieve table element
const height = document.getElementById("inputHeight"); //retrieve Height
const width = document.getElementById("inputWidth"); //retrieve Width
const color = document.getElementById("colorPicker"); //retrieve current color
const sizePicker = document.getElementById("sizePicker"); //retrieve form

sizePicker.onsubmit = function(event){
  event.preventDefault();
  clearGrid();
  makeGrid();
}

function makeGrid() {
for (let n = 0; n< height.value; n++) {   //while inputWidth is between 1 and value.
      const row = table.insertRow(n);
    for (let m = 0; m< width.value; m++) {  //while inputHeight is between 1 and value.
      const cell = row.insertCell(m);
}}}

function clearGrid (){
    while (table.firstChild){
      table.removeChild(table.firstChild);
}}

  // Add Color.

$(table).on("click", "td", function() {
    $(this).css("background-color", $("#colorPicker").val());
});
    // Remove Color.

$(table).on("dblclick", "td", function() {
    $(this).removeAttr("style");
});
