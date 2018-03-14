$("form").on("submit", function (event){

  const rowLengthInput = #inputWidthK;
  const columnHeightInput = #inputHeightK;
  const rowLengthValue = $(inputWidthK).val();
  const columnHeightValue = $(inputHeightK).val();
  event.preventDefault();
  makeGrid(rowLengthValue, columnHeightValue);
  colorPaint();

columnHeightInput.on("change", function (){
    columnHeightValue = $(this).val();
});
rowLengthInput.on("change", function (){
    rowLengthValue = $(this).val();
})
for (let n = 1, n<= #inputWidthK, n++) {   //while inputWidth is between 1 and value.
    $("#pixelCanvas").append("<tr class = "n);  //create 1 <tr class = #+1 </tr> tag each pass
    for (let m = 1, m<= #inputHeightK, m++) {  //while inputHeight is between 1 and value.
         $("#pixelCanvas").append("<td class = "m"></td>");//create 1 <td class = #+1 > </td> tag each pass
  }
          $("#pixelCanvas").append("></tr>");
});



$('#colorPicker')


const grid = #pixelCanvas;
const colorCurrent = #colorPicker;  //label for color currently in use.

// Select color input .toggleclass()?
// Select size input

// When size is submitted by the user, call makeGrid()
$("kSubmit").on(makeGrid());
function makeGrid() {


  }
//<caption> </caption> add a caption?


//  while height <= inputHeight {
//    while width <= inputWidth {}

  }
  }

// Your code goes here!

}
});
