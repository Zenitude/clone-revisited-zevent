
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

    clipsContainers.forEach(container => {
        
        for(let i = 0 ; i < 23 ; i++)
        {
            // Card
            const card = document.createElement('a');
            card.setAttribute('href', 'https://www.youtube.com');
            card.setAttribute('class', 'card');
            container.appendChild(card);
        
            // Container Video
            const containerVideo = document.createElement('div');
            containerVideo.setAttribute('class', 'video');
            card.appendChild(containerVideo);
        
            // Video
            const video = document.createElement('video');
            video.setAttribute('controls', '');
            containerVideo.appendChild(video);
        
            // Container Description
            const containerDescription = document.createElement('div');
            containerDescription.setAttribute('class', 'desc');
            card.appendChild(containerDescription);
        
            // Views and Datetime
            const viewsAndDatetime = document.createElement('div');
            containerDescription.appendChild(viewsAndDatetime);
        
            const spanViews = document.createElement('span');
            spanViews.innerHTML = '1 000 000 Vues';
            viewsAndDatetime.appendChild(spanViews);
        
            const spanDatetime = document.createElement('span');
            spanDatetime.innerHTML = '01/01/2022 à 01:00:00';
            viewsAndDatetime.appendChild(spanDatetime);
        
            // Image Streamer and Title
            const streamerAndTitle = document.createElement('div');
            streamerAndTitle.setAttribute('class', 'title');
            containerDescription.appendChild(streamerAndTitle);
        
            const streamer = document.createElement('img');
            streamer.setAttribute('src', 'https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png');
            streamer.setAttribute('alt', ''),
            streamerAndTitle.appendChild(streamer);
        
            const title = document.createElement('h2');
            title.innerHTML = 'Titre video';
            streamerAndTitle.appendChild(title);
        
            // Name Streamer and Activities
            const streamerAndActivities = document.createElement('p');
            streamerAndActivities.innerHTML = 'Nom Streamer - Activité';
            containerDescription.appendChild(streamerAndActivities);
        
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
        console.log(radio.children)
        radio.children[1].addEventListener('focusin', () => {
            radio.children[0].classList.add('selected')
        })

        radio.children[1].addEventListener('focusout', () => {

            radio.children[0].classList.remove('selected')
        })
        
    })
}