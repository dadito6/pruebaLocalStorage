const button= document.getElementById('setLocal')

const nombres = [
{name:'cesar'},
{name:'ariel'},
{name:'augusto'}

]



button.addEventListener('click', () =>{
localStorage.setItem('Nombres',JSON.stringify(nombres))

const data= JSON.parse(localStorage.getItem('Nombres'))
const resultado = document.getElementById('results')

data.forEach(item => {
    let p = document.createElement('p')
    p.appendChild(document.createTextNode(item.name))
    resultado.appendChild(p)
});


})