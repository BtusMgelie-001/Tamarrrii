window.onload=function(){
A=document.getElementById("pathF");
B=document.getElementById("pathN");
C=document.getElementById("pathS");
D=document.getElementsByTagName("body");
setTimeout(pathF,10000);
setTimeout(pathS,25000);
}
function pathF(){
A.style.fill="yellow";
B.style.fill="red";
}
function pathS(){
    C.style.fill="green";
    $("body").css("background-color","purple");
}
