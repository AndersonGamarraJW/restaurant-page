
function createSocialContainer(id,socialName){
    const socialContainer = document.createElement('div');
    socialContainer.setAttribute('id',id);
    const socialTitle = document.createElement('p');
    socialTitle.textContent = socialName;
    
    //socialContainer add childs
    socialContainer.appendChild(socialTitle);
    
    return socialContainer;
}

function createContactContainer(){
    const mainContainer = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = 'Contactanos';
    const numberP = document.createElement('p');
    numberP.textContent = '+51 999888777';
    
    const socialSectionContainer = document.createElement('div');
    socialSectionContainer.appendChild(createSocialContainer('instagram-container','Instagram'));
    socialSectionContainer.appendChild(createSocialContainer('facebook-container','Facebook'));
    socialSectionContainer.appendChild(createSocialContainer('whatsapp-container','WhatsApp'));
    


    //mainContainer add tittle and numberP
    mainContainer.appendChild(title);
    mainContainer.appendChild(numberP);

    mainContainer.appendChild(socialSectionContainer);

    return mainContainer;
}

const loadContact = () => {
    console.log('entro');
    const main = document.querySelector('main');
    main.appendChild(createContactContainer());
}
export default loadContact;