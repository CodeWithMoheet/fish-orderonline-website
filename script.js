burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
right = document.querySelector('.right')


burger.addEventListener('click', ()=>{
    right.classList.toggle('v-class')
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('h-navbar')
})