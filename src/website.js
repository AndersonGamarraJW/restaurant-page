function createNav(options){
    const nav = document.createElement('nav');
    const listUl = document.createElement('ul');
    options.forEach(element => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = element;
        li.appendChild(a);
        listUl.appendChild(li);
    });
    nav.appendChild(listUl);
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