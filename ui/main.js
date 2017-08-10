console.log('Loaded!');
var img=document.getElementById("madi");
var margin=0;
function moveRight()
{
    margin=margin+1;
    img.style.marginLeft=margin+'px';
}
img.onclick=function()
{
setInterval(moveRight,50);
};
var button=document.getElementById("counter");
var counter=0;
button.onclick=function()
{
  counter=counter+1;
  var span=document.getElementById("count");
  span.innerHTML=counter.toString();
};
