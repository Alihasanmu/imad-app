console.log('Loaded!');

  var submit=document.getElementById("submit_btn");
var button=document.getElementById("counter");
submit.onclick=function()
{
    var request= new XMLHttpRequest();
    var nameInput=document.getElementById("name");
  var name=nameInput.value;
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
    if(request.status===200)
    {
       var names=request.responseText;
       names=JSON.parse(names);
      var list="";
      for(var i=0;i<names.length;i++)
      {
          list += '<li>'+names[i]+'</li>';
      }
      var ul=document.getElementById("namesList");
      ul.innerHTML=list;
    }
        }
    };
  request.open('GET','http://alihasanmulji.imad.hasura-app.io/submit-name?name ='+name,true);
  request.send(null);
};


