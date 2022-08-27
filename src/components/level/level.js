const amountLevels = 5
let gameLevel = false
const levels = ['Очень легкий' , 'Легкий уровень' , 'Средний уровень' , 'Высокий уровень' , 'Очень высокий']
const levelAttribute = ['light' , 'easy' , 'normal' , 'hard' , 'expert']
import {chooseLvlActionCreator} from '../reducers/reducer'
import {dispatch} from '../createStore/createStore'



function setLevel() {
    if(!gameLevel){
        gameLevel = true
        levels.reverse()
        levelAttribute.reverse()
        const btnsLvl = document.createElement('div')
        const allCardsAncientDiv = document.querySelector('.cards-ancients')
        btnsLvl.classList.add('btns-level')
        allCardsAncientDiv.insertAdjacentElement('afterend' , btnsLvl)
        for(let i=0;i<amountLevels;i++){
            const levelAncientBtn = document.createElement('button')
            levelAncientBtn.textContent = levels[i]
            levelAncientBtn.classList.add('level-btn')
            levelAncientBtn.setAttribute('data-level' , levelAttribute[i])
            btnsLvl.insertAdjacentElement('afterbegin' , levelAncientBtn)
            levelAncientBtn.addEventListener('click' , (e)=>{
                dispatch(chooseLvlActionCreator(e.target.getAttribute('data-level')))
            })
        }
    }
    
}

export default setLevel