import createStore from '../state/state'
import reducer from '../reducers/reducer'

let myStore = createStore(reducer)

export default myStore

export const dispatch = myStore.dispatch