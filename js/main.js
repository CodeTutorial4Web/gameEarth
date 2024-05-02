let openNavBtn = document.getElementById('openNavBtn');
let nav = document.querySelector('nav');
let header = document.querySelector('header');
let links = document.querySelector('header nav ul');
let socialLinksIcons = document.querySelectorAll('.social-links-container ul li i');
let socialLinksContainers = document.querySelectorAll('.social-links-container ul li');

openNavBtn.addEventListener('click', () => {
    header.classList.toggle('max-height')
    links.classList.toggle('show')
    nav.classList.toggle('maximize')
    removeScrollbar()
})
function removeScrollbar() {
    document.body.classList.toggle('overflow')
}



let wScroll;
let storeTopPosition = $("#store").offset().top;


$(window).scroll(function () {

    wScroll = $(window).scrollTop();

    if(wScroll == 0){
        $("#scrollUpBtn").fadeOut(500);
    } 
    if(wScroll > storeTopPosition -100){
        $("#scrollUpBtn").fadeIn(500 , function () {

            $("#scrollUpBtn").click(function () {
                $(window).scrollTop(0); 
            })
            
        });
        
    }else{
        $("#scrollUpBtn").fadeOut(500);
    }
    
})


// SOCIAL LINKS

// socialLinksIcons.forEach(icon => {
//     icon.addEventListener('click' , () => {
//         socialLinksContainers.forEach(link => {
//             link.classList.toggle('open-social-link')
//         })
//     })
// })

// socialLinksIcons.forEach(icon => {
//     icon.addEventListener('click', () => {

//         const parentLinkContainer = links.closest('.social-links-container');
//         parentLinkContainer.classList.toggle('open-social-link');
//     });
// });

function selectElement(element, className) {
    document.querySelectorAll(element).forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'open-social-link' class from all items except the clicked one
            document.querySelectorAll(element).forEach(innerItem => {
                if (innerItem !== item) {
                    innerItem.classList.remove(className);
                }
            });
            // Toggle 'open-social-link' class on the clicked item
            item.classList.toggle(className);
        });
    });
}

selectElement(".social-links-container ul li", "open-social-link")