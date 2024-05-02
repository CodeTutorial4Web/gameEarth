let finalResult;
async function getGames(){
    let games = await fetch('./games-data/home-games-data.json');
    finalResult = await games.json();
    console.log(finalResult);

    // let suggestions = finalResult.suggestions;
    let vouchers = finalResult.vouchers;
    let gamesList = finalResult.games;
    let vouchersContainer = ``;
    let gamesContainer = ``;
    let key;
    // for(key in suggestions){

    //     suggestionsContainer += `
    
    //     <a href="${suggestions[key].url}">
    //     <div class="item">
    //         <div class="img-container">
    //             <img src="${suggestions[key].imgSrc}" alt="">
    //         </div>
    //         <div class="item-content">
    //             <h4>${suggestions[key].title}</h4>
    //         </div>
    //         <div class="item-desc">
    //             <p>${suggestions[key].desc}</p>
    //         </div>
            
    //     </div>
    
    // </a>
    //     `
    // }

    for(key in gamesList){

        gamesContainer += `
    
        <a href="${gamesList[key].gameLink}">
        <div class="item shadow-inset-center">
            <div class="img-container">
                <img src="${gamesList[key].imgSrc}" alt="">
            </div>
            <div class="item-content">
                <h4>${gamesList[key].title}</h4>
            </div>
            <div class="item-desc">
                <p>${gamesList[key].desc}</p>
            </div>   
        </div>
    
    </a>
        `
    }
    for(key in vouchers){

        vouchersContainer += `
    
        <a href="${vouchers[key].gameLink}">
        <div class="item shadow-inset-center">
                <img src="${vouchers[key].imgSrc}" alt="">
            <div class="item-content">
                <h4>${vouchers[key].title}</h4>
            </div>
            <div class="item-desc">
                <p>${vouchers[key].desc}</p>
            </div>   
        </div>
    
    </a>
        `
    }
    document.querySelector(".container-games").innerHTML = gamesContainer;
    document.querySelector(".vouchers").innerHTML = vouchersContainer;

}

getGames();


