import { createStore } from 'redux';
import reducers from './reducers.js';

const store = createStore(reducers); 

store.subscribe(() => {
    const comments = store.getState() .comments;
    ReactDOM.render(<CommentList comments = {comments} />, mountingPoint)
});

store.dispatch(addComment('pierwszy komentarz'));