$("#silver").click(()=>{
    $("#coinsCards").removeClass("show");
    $("#silverCards").addClass("show");
})

$("#coins").click(()=>{
    $("#coinsCards").addClass("show");
    $("#silverCards").removeClass("show");
    $("#silverCards").addClass("hide");
})


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

selectElement(".amount-cards .card", "select");
selectElement(".category-cards .card", "select");
selectElement(".payments-container .item", "select");


