let list=document.querySelectorAll('li');

for(lists of list){
let span=document.createElement('span');
let txt=document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
lists.appendChild(span);
}

let close=document.querySelectorAll(".close");
for(closes of close){
closes.onclick=function(ev){
    let div=this.parentElement;
    div.style.display="none";
}
}

 let ul=document.querySelector('ul');

ul.addEventListener("click",function(ev){
        if(ev.target.tagName=='LI'){
            ev.target.classList.toggle('checked');
            console.log("matches")
        }
        console.log("clicked");
    },false);

let btn=document.querySelector("button");
let input=document.querySelector("input");
btn.addEventListener('click',update);


function update(){
    if(input.value==""){
alert("please write something to add");
    }
    else{
    let li=document.createElement('li');
    li.innerText=input.value;
    ul.appendChild(li);
    let span=document.createElement('span');
let txt=document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
li.appendChild(span);
input.value="";


let close=document.querySelectorAll(".close");
for(closes of close){
closes.onclick=function(ev){
    let div=this.parentElement;
    div.style.display="none";
}
    
   
    }
}
   

}
