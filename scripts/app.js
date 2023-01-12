
/* Display / Hidden Menu Hamburger on Header */
if(document.querySelector('.container'))
{
    const menu = document.querySelector('.menu');
    const items = document.querySelectorAll('.navHeader li:not(.cart)');

    menu.addEventListener('click', () => {
        for(icon of menu.children) icon.classList.toggle('active');
        items.forEach(item => { item.classList.toggle('active')})
    });
}

/* Associsations Page */
if(document.querySelector('.containerAssociations'))
{
    /* Tabs */
    const buttons = document.querySelectorAll('.buttonTabs button');
    const sections = document.querySelectorAll('.contentTabs section');

    for (let i = 0 ; i < buttons.length ; i++)
    {
        buttons[i].addEventListener('click', () => {
            
            if(!sections[i].classList.contains('activeTabs'))
            {
                sections.forEach(section => {
                    
                    section.classList.remove('activeTabs');
        
                });

                sections[i].classList.add('activeTabs');
            }

        });
    }
}

/* Clips Page */
if(document.querySelector('.containerClips'))
{
    /* Tabs */
    const filters = document.querySelectorAll('.filterClips .buttonTabs');
    const clipsContainers = document.querySelectorAll('.clips');
    const page = document.querySelector('.pagination button');

    class Clip {
        constructor(linkClip, srcVideo, views, dateHour, srcImageStreamer, titleVideo, nameStreamer, activityStreamer, containerClip)
        {
            this.linkClip = linkClip;
            this.srcVideo = srcVideo;
            this.views = views;
            this.dateHour = dateHour;
            this.srcImageStreamer = srcImageStreamer;
            this.titleVideo = titleVideo;
            this.nameStreamer = nameStreamer;
            this.activityStreamer = activityStreamer;
            this.containerClip = containerClip;
        }

        createClips() {
            const views = new Intl.NumberFormat().format(this.views);
            const date = new Date(this.dateHour).toLocaleDateString();
            const hours = new Date(this.dateHour).toLocaleTimeString();

            const card = document.createElement('a');
            card.setAttribute('href', this.linkClip);
            card.setAttribute('class', 'card');
            
            card.innerHTML = `           
                <video src="${this.srcVideo}" controls></video>
                
                <div class="desc">
                    <div><span>${views} Vues</span><span>${date} à ${hours}</span></div>
                    <div class="title">
                        <img src="${this.srcImageStreamer}" alt="Image logo de ${this.nameStreamer}">
                        <h2>${this.titleVideo}</h2>
                    </div>
                    <p><span>${this.nameStreamer}</span> - <span>${this.activityStreamer}</span></p>
                </div>
            `;

            this.containerClip.appendChild(card);
        }
        
    }

    clipsContainers.forEach(container => {
        
        for(let i = 0 ; i < 23 ; i++)
        {
            // Card
            let card = new Clip(
                'https://www.youtube.com', 
                '', 
                1000000, 
                '01/01/2022 01:00:00', 
                'https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png', 
                'Titre video', 
                'Nom streamer', 
                'Activité',
                container
            ).createClips();
        }
    });

    for (let i = 0 ; i < filters.length ; i++)
    {
        filters[i].addEventListener('click', () => {
            
            switch(i)
            {
                case 0 : page.innerHTML = '1'; break;
                case 1 : page.innerHTML = '2'; break;
                case 2 : page.innerHTML = '3'; break;
                case 3 : page.innerHTML = '4'; break;
            }

            if(!clipsContainers[i].classList.contains('activeTabs'))
            {
                clipsContainers.forEach(container => {
                    
                    container.classList.remove('activeTabs');
        
                });

                clipsContainers[i].classList.add('activeTabs');
            }

            if(!filters[i].classList.contains('activeClips'))
            {
                filters.forEach(filter => {
                    filter.classList.remove('activeClips');
                });
                filters[i].classList.add('activeClips');
            }

        });
    }

    const buttonSlideBar = document.querySelector('.filterClips .buttonSlideBar');
    const slideBar = document.querySelector('.slideBar')

    buttonSlideBar.addEventListener('click', () => {
        slideBar.classList.toggle('activeSlideBar');
    });

}

/* Shop Page */
if(document.querySelector('.containerShop'))
{
    /* Intercom */
    const intercom = document.querySelector('.intercom');
    intercom.addEventListener('click', () => {
        for(icon of intercom.children) icon.classList.toggle('active');
    })

    /* Year Copyright */
    const yearCopy = document.querySelector('.yearCopy');
    yearCopy.innerHTML = new Date().getFullYear().toString();

    /* Color label radio */
    const radios = document.querySelectorAll('.radio');
    

    radios.forEach(radio => {
        radio.children[1].addEventListener('focusin', () => {
            radio.children[0].classList.add('selected')
        })

        radio.children[1].addEventListener('focusout', () => {

            radio.children[0].classList.remove('selected')
        })
        
    })

    /* Quantity */
    const quantityTab = document.querySelectorAll('.inputQuantity'); // Tableau contenant tous les input
    const moreTab = document.querySelectorAll('.moreQuantity'); // Tableau contenant tous les boutons +
    const lessTab = document.querySelectorAll('.lessQuantity'); // Tableau contenant tous les boutons -

    for(let i = 0 ; i < quantityTab.length ; i++) {
        moreTab[i].addEventListener('click', () => quantityTab[i].value >= 20 ? quantityTab[i].value = 20 : quantityTab[i].value++);
        lessTab[i].addEventListener('click', () => quantityTab[i].value <= 1 ? quantityTab[i].value = 1 : quantityTab[i].value--);
    }
}