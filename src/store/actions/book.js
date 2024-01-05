import { useDispatch } from "react-redux"

export const addBook = (book) => {
    return {
        type: "ADD_BOOK",
        payload: book
    }
}
export const deleteBook = (bookCode) => {
    return {
        type: "DELETE_BOOK",
        payload: bookCode
    }
}
export const selectBook = (book) => {
    return {
        type: "SELECT_BOOK",
        payload: book
    }
}
export const selectBookForEdit = (book) => {
    return {
        type: "SELECT_BOOK_FOR_EDIT",
        payload: book
    }
}
export const saveEditedBook = (editedBook) => {

    return {
        
            type: "SAVE_EDITED_BOOK",
            payload: editedBook
    };
}

export const showForm=(flag)=>{
    return{
        type:"SHOW_FORM",
        payload:flag
    }
}
export const hideBookDetails = () => {
    return {
        type: 'HIDE_BOOK_DETAILS'
    };
};