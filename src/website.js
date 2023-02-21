import loadMenu from "./menu.js";

function setClickEvent(id,event){
    const element = document.getElementById(id);
    element.addEventListener('click',event);
}
function createNav(options){
    const nav = document.createElement('nav');
    const listUl = document.createElement('ul');
    options.forEach(option => {
        const li = document.createElement('li');
        li.setAttribute('id',option);
        const a = document.createElement('a');
        
        a.textContent = option;
        li.appendChild(a);
        listUl.appendChild(li);
    });
    nav.appendChild(listUl);
    
    setClickEvent('menu',loadMenu);
    

    return nav;
}
function createHeader(){
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = "Peruvian Restaurant";
    header.appendChild(title);
    return header;
}

function createMain(){
     
}