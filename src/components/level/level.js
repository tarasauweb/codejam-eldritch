const amountLevels = 5
let gameLevel = false
const levels = ['Очень легкий' , 'Легкий уровень' , 'Средний уровень' , 'Высокий уровень' , 'Очень высокий']
const levelAttribute = ['light' , 'easy' , 'normal' , 'hard' , 'expert']

function setLevel() {
    if(!gameLevel){
        gameLevel = true
        levels.reverse()
        levelAttribute.reverse()
        const btnsLvl = document.createElement('div')
        const allCardsAncientDiv = document.querySelector('.cards-ancients')
        console.log(allCardsAncientDiv)
        btnsLvl.classList.add('btns-level')

        allCardsAncientDiv.insertAdjacentElement('afterend' , btnsLvl)

        for(let i=0;i<amountLevels;i++){
            const levelAncientBtn = document.createElement('button')
            levelAncientBtn.textContent = levels[i]
            levelAncientBtn.classList.add('level-btn')
            levelAncientBtn.setAttribute('data-level' , levelAttribute[i])
            btnsLvl.insertAdjacentElement('afterbegin' , levelAncientBtn)
        }
    }
    
}

export default setLevel