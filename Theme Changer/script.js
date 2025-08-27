let btn=document.getElementById('btn');
let text=document.querySelector('.text');
let container=document.querySelector(".container")
let card=document.querySelector(".card")
let emoji=document.querySelector(".emoji")
//console.log(btn)
//console.log(text)
//console.log(emoji)
let currentmode="light";


btn.addEventListener("click",()=>{
    if(currentmode==="light"){
       currentmode='dark';
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        container.style.backgroundColor="black";
        card.style.color="black";
        text.textContent="Dark Mode Activated";
        emoji.textContent="🌙";
        console.log('black');
        
       
        
    }
    else{ currentmode='light';
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        container.style.backgroundColor="white";
        card.style.color="black";
        text.textContent="Light Mode Activated";
        emoji.textContent="☀️";
        emoji.style.transform="rotate(360deg)";
        emoji.style.transition="transform 0.5s ease";
        console.log('light')
    }
})


































