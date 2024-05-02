let finalResult;
async function getGames(){
    let games = await fetch('./games-data/all-games-data.json');
    finalResult = await games.json();
    console.log(finalResult);

    let gamesList = finalResult;
    let gamesContainer = ``;
    let key;

    for(key in gamesList){

        gamesContainer += `
    
        <a href="${gamesList[key].gameLink}">
        <div class="item">
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

    // document.querySelector(".suggestions").innerHTML =suggestionsContainer;
    document.querySelector(".all-games-container").innerHTML = gamesContainer;

}

getGames();


