const text = document.getElementById('text');
const bird1 = document.getElementById("bird1");
const bird2 = document.getElementById("bird2");
const forest = document.getElementById("forest");
const rocks = document.getElementById("rocks");
const water = document.getElementById("water")
const btn = document.querySelector(".btn");
const header = document.getElementById('header');
const ab = document.querySelector(".about")
const menuBtn = document.querySelector(".menu_btn")
const links = document.querySelector('.nav-links')
const link = document.querySelectorAll('.nav-link')


console.log(link)

let abTop = ab.getBoundingClientRect().top

window.addEventListener('scroll',()=>{
    let value = window.scrollY
    text.style.top = 50+ value * -0.3 +"%"
    bird1.style.top = value * -1.5 + "px"
    bird1.style.left = value * 2 + "px"
    bird2.style.top = value * -1.5 + "px"
    bird2.style.left = value * -5 + "px"
    btn.style.marginTop = value * 1.5 + "px"
    rocks.style.top = value * -0.01 + "px";
    water.style.top = value * 0.1 + "px";
    header.style.top = value * 0.5 + "px"

})

menuBtn.addEventListener('click',()=>{
    console.log('clicked')
    links.classList.toggle("show")
})

link.forEach(element => {
    element.addEventListener("click", ()=>{
        links.classList.remove('show')
    })
});