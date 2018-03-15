var table = document.getElementById("pixelCanvas"); //retrieve table element
var height = document.getElementById("inputHeightK"); //retrieve Height
var width = document.getElementById("inputWidthK"); //retrieve Width
var color = document.getElementById("colorPicker"); //retrieve current color
var sizePicker = document.getElementById("sizePicker"); //retrieve form

sizePicker.onsubmit = function(event){
  event.preventDefault();
  clearGrid();
  makeGrid();
}

function makeGrid() {

for (let n = 0; n< width.value; n++) {   //while inputWidth is between 1 and value.
      const row = table.insertRow(n);
    for (let m = 0; m<  height.value; m++) {  //while inputHeight is between 1 and value.
      const cell = row.insertCell(m);
}
  }
}

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
