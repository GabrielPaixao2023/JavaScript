/*
Review:
DOM: 
- addEventListener

Variáveis - Ok
For / if - Ok 
function
*/
const minhaDiv = document.getElementById("minha-div")
const btnteste = document.getElementById("btn-teste")
const btnteste2 = document.getElementById("btn-teste2")
const btnteste3 = document.getElementById("btn-teste3")
const btnteste4 = document.getElementById("btn-teste4")
const btnteste5 = document.getElementById("btn-teste5")
const btnteste6 = document.getElementById("btn-teste6") 

//Ele precisa de dois parâmetros: a ação e a função para executar
btnteste.addEventListener('click', ()=>{
   
    minhaDiv.style.backgroundColor ="blue"
})
btnteste2.addEventListener('click', ()=>{
    minhaDiv.style.backgroundColor ="green"
})
btnteste3.addEventListener('click', ()=>{
    minhaDiv.style.backgroundColor ="yellow"
})
btnteste4.addEventListener('click', ()=>{
    minhaDiv.style.backgroundColor ="grey"
})
btnteste5.addEventListener('click', ()=>{
    minhaDiv.style.backgroundColor ="red"
})
btnteste6.addEventListener('click', ()=>{
    minhaDiv.style.backgroundColor ="violet"
})

