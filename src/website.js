import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import loadHome from "./home.js";

function setClickEvent(id,loadSection){
    const element = document.getElementById(id);
    element.addEventListener('click',loadSection);
}
function loadNav(options){
    const nav = document.createElement('nav');
    const listUl = document.createElement('ul');
    options.forEach(option => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.setAttribute('id',option);
        a.textContent = option;
        li.appendChild(a);
        listUl.appendChild(li);
    });
    nav.appendChild(listUl);
    
    
    //nav add to header
    const header = document.querySelector('header');
    header.appendChild(nav);

    //set events
    setClickEvent('menu',loadMenu);
    setClickEvent('contact',loadContact);
    setClickEvent('home',loadHome);
}
function loadHeader(){
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = "Peruvian Restaurant";
    header.appendChild(title);
    
    //header add to body
    document.body.appendChild(header);
}

function loadMain(){
    const main = document.createElement('main');
    const contentDiv = document.getElementById('content');
    main.setAttribute('id','main');
    main.appendChild(contentDiv);
    
    //main add to body
    document.body.appendChild(main);
}
function loadWebsite(){
    loadHeader();
    loadNav(["home","menu","contact"]);
    loadMain();
}
export default loadWebsite;