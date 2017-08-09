console.log('Loaded!');
var img=document.getElementById("madi");
var margin=0;
function moveRight()
{
    margin=margin+1;
    img.style.marginLeft=margin+'px';
}
img.onclick=setInterval(moveRight,50);