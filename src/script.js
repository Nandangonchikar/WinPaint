var canvas=document.getElementById("can");
var context=canvas.getContext("2d");
var color="black";
var radius="50";
// only paint if mouse is  being dragged (moved while the button is pressed)
var IsPainting=false;

function clearCanvas()
{ context.clearRect(0,0,canvas.width,canvas.height);
}
function brushcolor()
{
  var brushcolor=document.getElementById("clr");
  color=brushcolor.value;
}

function BrushsizeSelect(x)
{
  var size=document.getElementById("BrushSize");
  radius=x;
   alert(radius);
}


function paintCircle(x,y){
  context.beginPath();
  
  // draw circle using a complete (2*PI) arc around given point
  alert(radius);
  context.arc(x,y,radius,0,Math.PI*2,true);
   alert(Math.PI*2);
  context.fillstyle=color;
  context.fill();
 
}
function doPaint(x,y)
{
  if(IsPainting)
  paintCircle(x,y);
}

function startPaint()
{ 
  IsPainting=true; 
}

function endPaint()
{
  IsPainting=false;
}