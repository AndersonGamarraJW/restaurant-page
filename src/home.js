function createHomeContainer(){
    const homeContainer = document.createElement('div');
    const homeTitle = document.createElement('h2');
    homeTitle.textContent = 'El mejor restaurante del Peru';
    homeContainer.appendChild(homeTitle);

    return homeContainer;
}

function loadHome(){
    const main = document.querySelector('main');
    main.appendChild(createHomeContainer());
}

export default loadHome;

