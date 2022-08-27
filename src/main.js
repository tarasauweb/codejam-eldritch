import "./style.css";
import ancients from './assets/Ancients/index'

import createCardAncient from './components/startGame/choose'
import myStore from './components/createStore/createStore'

createCardAncient(ancients)

console.log(myStore)