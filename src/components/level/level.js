const amountLevels = 5
let gameLevel = false

function setLevel() {
    if(!gameLevel){
        gameLevel = true
        const btnsLvl = document.createElement('div')
        const allCardsAncientDiv = document.querySelector('.cards-ancients')
        console.log(allCardsAncientDiv)
        btnsLvl.classList.add('btns-level')

        allCardsAncientDiv.insertAdjacentElement('afterend' , btnsLvl)
    }
    
}

export default setLevel