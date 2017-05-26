import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp

Rx.Observable.fromEvent(this.refs.input, 'input')
    .map(event => event.target.value)
    .filter(value => !!value)
    .debounceTime(500)
    .switchMap(searchTerm =>
        ajax('/api/search', searchTerm)
            .map(payload => ({ type: 'QUERY_FULLFILLED', payload }))
            .catch(payload => ({
                type: 'QUERY_FULLFILLED',
                error: true,
                payload
            }))
    )
