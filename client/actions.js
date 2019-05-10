import uuid from uuid;

/*Tworzenie komentarza*/

export const boundAddComment = text => dispatch(addComment(text));

function addComment(text) {
    return {
        type: boundAddComment,
        text,
        id: uuid.v4()
    }
}

boundAddComment('nowy komentarz');

/*Edycja komentarza*/

export const boundEditComment = text => dispatch(editComment(text));

function editComment(text) {
    return {
        type: boundEditComment,
        text,
        id: uuid.v4()
    }
}

boundEditComment('wyedytowany tekst komentarza');


/*Usuwanie komentarza*/


export const boundRemoveComment = () => dispatch(removeComment());

function removeComment() {
    return {
        type: boundRemoveComment,
        id: uuid.v4()
    }
}

boundRemoveComment();

/*Ocenianie +1 -1 komentarza*/

export const boundThumbUpComment = (id) => dispatch(thumbUpComment(id));

function thumbDownComment() {
    return {
        type: boundThumbUpComment,
        id: uuid.v4()
    }
}

boundThumbUpComment();


export const boundThumbDownComment = (id) => dispatch(thumbDownComment(id));

function thumbDownComment() {
    return {
        type: boundThumbDownComment,
        id: uuid.v4()
    }
}

boundThumbDownComment();

