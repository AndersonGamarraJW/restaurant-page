import { Menu } from "./menu-object.js";
function createMenuContainer(){
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id','menu-container');
    
    mainContainer.appendChild(createMenuItemContainer(new Menu('Lomo Saltado','Plato tipico del Peru ','01 Hrs')));
    mainContainer.appendChild(createMenuItemContainer(new Menu('Ceviche','Plato tipico del Peru','20 Min')));
    mainContainer.appendChild(createMenuItemContainer(new Menu('Papa con huevo','Snack tipico del Peru','10 Min')));
    
    return mainContainer;
}

function createMenuItemContainer(menu){
    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');
    const titleMenu = document.createElement('p');
    titleMenu.textContent = menu.title;
    
    const descMenu = document.createElement('p');
    descMenu.textContent = menu.desc;

    const timeMenu = document.createElement('p');
    descMenu.textContent = 'Time: ' + menu.time;

    menuItemContainer.appendChild(titleMenu);
    menuItemContainer.appendChild(descMenu);
    menuItemContainer.appendChild(timeMenu);
    
    return menuItemContainer;
}
function loadMenu(){
    const main = document.querySelector('main');
    main.appendChild(createMenuContainer());
}
export default loadMenu;