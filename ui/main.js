console.log('Loaded!');
var img=document.getElementById("madi");
var margin=0;
function moveRight()
{
    margin=margin+100;
    img.style.marginLeft=margin+'px';
}
img.onclick=function()
{
setInterval(moveRight,100);
};