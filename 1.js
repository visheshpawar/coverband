function cm()
{
     var x=document.getElementById("al1");
     x.src="2.png";
}
function ot()
{
     var x=document.getElementById("al1");
     x.src="a.png";
}
function cm1()
{
     var x=document.getElementById("al2");
     x.src="b.png";
}
function ot1()
{
     var x=document.getElementById("al2");
     x.src="f.png";
}
var t=1;
function doitt()
{
if (t==1)
{
     document.getElementById("sdf").style.transform="translateX(5vw)";
     document.getElementById("crd").style.transform="rotateY(180deg)";
     t=0;
}
else if(t==0)
{
     document.getElementById("sdf").style.transform="translateX(0vw)";
     document.getElementById("crd").style.transform="rotateY(0deg)";
t=1;
}

}
var j=0;
function hs()
{
    
     if(j==0)
     {

          document.getElementById("bt1").innerText="Hide";
    var d= document.getElementById("pw");
    d.type="text";
  
    j=1;
     }
     else if(j==1)
     {

          document.getElementById("bt1").innerText="Show";
    var d= document.getElementById("pw");
    d.type="password";
    j=0;
     }
}
function show()
{
    
     var c1= document.getElementById("pw").value;
     var c2= document.getElementById("nm").value;

if (c1=="pas" && c2=="id")
{
     document.getElementById("lpa").style.display="none";
     document.getElementById("m1").style.visibility="visible";
}
else if(c1=="pas")
{
     document.getElementById("nm").value="wrong email";
}
else if( c2=="id")
{
     document.getElementById("pw").value="wrong password";
}





}
window.addEventListener("scroll",function()
{

var df=document.getElementById("lb");
var sd=df.offsetTop;
if(window.pageYOffset>=sd)
{
     document.getElementById("ls").style.color="black";
     this.document.getElementById("flp").style.transform="rotateX(0deg)";
}
else if(window.pageYOffset<sd)
{
     document.getElementById("ls").style.color="white";
     this.document.getElementById("flp").style.transform="rotateX(90deg)";
}


})

function sdbrs()
{
document.getElementById("sdbr").style.width="50vw";
document.getElementById("hj").style.transform="rotate(0deg)";
document.getElementById("ls").style.transform="rotate(90deg)";
document.getElementById("ls").style.opacity="0";
}

function sdbrh()
{
document.getElementById("sdbr").style.width="0vw";
document.getElementById("hj").style.transform="rotate(90deg)";
document.getElementById("ls").style.transform="rotate(0deg)";
document.getElementById("ls").style.opacity="1";
}