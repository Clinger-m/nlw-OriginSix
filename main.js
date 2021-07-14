/*abre e fecha o menu quando clicar o no ícone*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', () =>{
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click',() => {
        nav.classList.remove('show')
    })
}