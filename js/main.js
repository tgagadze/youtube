let menuToggle = document.getElementById('menu-toggle');
let isVisible = true;
let sidebar = document.getElementById('main__sidebar__left');
let content = document.getElementById('main-wrapper');


function showOrHideMenu(){
    if(isVisible){
        sidebar.style.display = "none";
        content.style.width = "100%";
        isVisible = false;
    }
    else if(!isVisible){
        sidebar.style.display = "initial";
        content.style.width = "calc(100% - 240px)";
        isVisible = true;
    }
}


menuToggle.addEventListener('click', showOrHideMenu);


let color_options_btn = document.querySelector('.fa-user');
let color_options = document.querySelector('.color-controls');

color_options_btn.addEventListener('click',()=>{color_options.classList.toggle('vissible')})
console.log(color_options)