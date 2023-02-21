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
    const main = document.createElement('main');
    const contentDiv = document.getElementById('content');
    main.setAttribute('id','main');
    main.appendChild(contentDiv);
    return main;
}
function loadWebsite(){
    const body = document.querySelector('body');
    const nav = createNav(["Home","Menu","Contactanos"]);
    const header = createHeader();
    header.appendChild(nav);
    body.appendChild(header);
    body.appendChild(createMain());   
}
export default loadWebsite;