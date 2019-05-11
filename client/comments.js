import { boundAddComment } from './actions'
import { boundEditComment } from './actions'
import { boundRemoveComment } from './actions'
import { boundThumbUpComment } from './actions'
import { boundThumbDownComment } from './actions'

function comments(state = [], action) {
    switch (action.type) {
        case boundAddComment:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
        case boundEditComment:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
        case boundRemoveComment:
            return [{
                id: action.id,
                votes: 0
            }
            , ...state];
        case boundThumbUpComment:
            return [{
                id: action.id,
                votes: 0
            }
            , ...state];
        case boundThumbDownComment:
            return [{
                id: action.id,
                votes: 0
            }
            , ...state];
    }
}

comments();