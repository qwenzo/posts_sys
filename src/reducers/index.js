import {combineReducers} from 'redux'
import postsReducer from './posts_reducer';
import {reducer as form} from 'redux-form'
 const rootReducer = combineReducers(
    {posts:postsReducer,
    form:form}
)

export default rootReducer;