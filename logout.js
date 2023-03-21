var password = "123"
var email = "jyo@gmail.com"
function accesstopage()
{
var userUSID = document.getElementById("userEmail").value
var userUSP = document.getElementById("userPass").value
if(userUSID==email && userUSP==password)
{
    var fom = document.forms
   
    fom[0].elements[2].type="submit"
    fom[0].action="./Thank.html"
}
else if(userUSID!=email && userUSP==password)
{
    document.getElementById("status").innerHTML="Email is wrong"
    document.getElementById("emaildiv").style.borderColor="red"
    document.getElementById("passdiv").style.borderColor="royalblue" 
    document.body.style.backgroundImage="linear-gradient(90deg,red,purple)"
}
else if(userUSID==email && userUSP!=password)
{
    document.getElementById("status").innerHTML="Password is wrong"
    document.getElementById("emaildiv").style.borderColor="royalblue"
    document.getElementById("passdiv").style.borderColor="red"
    document.body.style.backgroundImage="linear-gradient(90deg,rgb(255, 0, 111),red)"
}
else
{
    document.getElementById("status").innerHTML="Email and password is wrong"
    document.getElementById("emaildiv").style.borderColor="red"
    document.getElementById("passdiv").style.borderColor="red"
    document.body.style.backgroundImage="linear-gradient(90deg,red,red)"
}
}
function visiblepass()
{
var fom = document.forms
fom[0].elements[1].type="text"
document.getElementById("visible").style.transform="rotateY(360deg)"
document.getElementById("visible").style.transform="transform 1s"
var img = document.images
img[0].src="./Asset/images/openmonkey.webp"   
}
function invisiblepass()
{
var fom = document.forms
fom[0].elements[1].type="password"
var img = document.images
img[0].src="./ASSET/images/closeMonkey.png"
document.getElementById("visible").style.transform="rotateY(-360deg)"
document.getElementById("visible").style.transition="transform 1s"
}