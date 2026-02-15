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

// saBOUR java script

// ===== FUNDO BINARIO CAINDO =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letras = "01";
const letrasArray = letras.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for(let x = 0; x < columns; x++)
drops[x] = 1;

function draw(){
ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#22c55e"; // cor verde
ctx.font = fontSize + "px monospace";

for(let i = 0; i < drops.length; i++){
const text = letrasArray[Math.floor(Math.random()*letrasArray.length)];
ctx.fillText(text, i*fontSize, drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
drops[i] = 0;

drops[i]++;
}
}

setInterval(draw, 33);

// responsivo
window.addEventListener("resize", ()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});
