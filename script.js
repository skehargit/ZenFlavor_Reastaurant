const menubtn=document.getElementById("menubtn");
const discountbtn=document.getElementById("discountbtn");
const discountpercentage=document.getElementById("percentage");

// nav menu toggle----------
const discountcode=document.getElementById("discode");
menubtn.addEventListener("click",()=>{
    document.querySelector("ul").classList.toggle("toggle");
})
// discount animation-------
discountbtn.addEventListener("click",()=>{
    discountbtn.innerText="congratulation";
    discountbtn.style.backgroundColor="rgb(247, 137, 12)";
    discountbtn.style.color="white";
    document.getElementById("leftanimate").style.width=0;
    document.getElementById("rightanimate").style.width=0;

})
// discount code generate---------
let num=Math.ceil(Math.random()*80);
discountpercentage.innerText=`${num}%`;
let code=[34,54,76,48,93,82,95,83,29,11,54,20,48,60,77];
let codestr=["ss","hu","gr","ee","sh","kr","hh","ud","he","qp","ks","ks","yr","mm","oo"];
let ran=Math.floor(Math.random()*15);
let ran2=Math.floor(Math.random()*15);
let ran3=Math.floor(Math.random()*15);
discountcode.innerText=`${code[ran2]}${codestr[ran]}${code[ran3]}${codestr[ran2]}${codestr[ran3]}${code[ran]}`;          

// end-----------