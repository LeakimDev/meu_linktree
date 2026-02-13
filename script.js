// efeito clique
document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.style.transform="scale(0.92)";
setTimeout(()=>{
btn.style.transform="scale(1)";
},150);
});
});

// efeito digitação no título
const titulo = "Astra Soluções TI💻";
let i=0;
const h1 = document.querySelector("h1");
h1.innerHTML="";

function escrever(){
if(i<titulo.length){
h1.innerHTML += titulo.charAt(i);
i++;
setTimeout(escrever,80);
}
}

escrever();
