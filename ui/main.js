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
button.onclick=function()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readystate===XMLHttpRequest.Done)
        {
    if(request.status===200)
    {
        var counter=request.responseText;
        var span=document.getElementById("count");
        span.innerHTML=counter.toString();
    }
        }
    };
  request.open('GET','https://http://alihasanmulji.imad.hasura-app.io/counter',true);
  request.send(null);
  
};
