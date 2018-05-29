// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const width = document.getElementById("inputWidth");
const height = document.getElementById("inputHeight");
// Retrieve table element
const table = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
const sizePicker = document.getElementById("sizePicker");

//      FUNCTIONS *********************************************
function makeGrid(){
  for( let n = 0; n < height.value; n++) {
    const row = table.insertRow(n);
    for( let m = 0; m < width.value; m++) {
      const cell = row.insertCell(m);
    }}}

function clearGrid(){
  while (table.firstChild){
    table.removeChild(table.firstChild);
  }}

//    EVENT LISTENERS ****************************************
sizePicker.addEventListener('submit', function(event){
  event.preventDefault();
  clearGrid();
  makeGrid();
});

$(table).on("click", "td", function(){
  $(this).css("background-color", $("#colorPicker").val());
});

$(table).on("dblclick", "td", function(){
  $(this).removeAttr("style");
});
