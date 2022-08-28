const amountLevels = 5
let gameLevel = false
const btnsArr = []
const levels = ['Очень легкий' , 'Легкий уровень' , 'Средний уровень' , 'Высокий уровень' , 'Очень высокий']
const levelAttribute = ['light' , 'easy' , 'normal' , 'hard' , 'expert']
const difficulty = ['hard' , 'normal' , 'easy']
import {chooseLvlActionCreator} from '../reducers/reducer'
import {dispatch} from '../createStore/createStore'
import createBtnDeck from '../deckCreate/deck-btn'


function setLevel() {
    let myDiffcutly = null
    let check = false
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
            btnsArr.push(levelAncientBtn)
            levelAncientBtn.addEventListener('click' , (e)=>{
                if(!check){
                    createBtnDeck()
                    check = true
                }
                else if(check){
                    const deckBtn = document.querySelector('.deck-btn')
                    deckBtn.remove()
                    createBtnDeck()
                }
                btnsArr.forEach(item=>{
                    item.classList.remove('active-lvl')
                })
                e.target.classList.add('active-lvl')
                if(e.target.getAttribute('data-level') === 'light'){
                    myDiffcutly = 'easy'
                    
                }
                
                else if(e.target.getAttribute('data-level')=== 'expert'){
                    myDiffcutly = 'hard'
                }
                else{
                    myDiffcutly = e.target.getAttribute('data-level')
                }
                // console.log(myDiffcutly)
                dispatch(chooseLvlActionCreator(e.target.getAttribute('data-level'),myDiffcutly))
                
            })
        }
    }
    
}

export default setLevel