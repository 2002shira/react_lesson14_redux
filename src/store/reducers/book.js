const initialState = {
    arr: [
        { name: "The secret garden", code: 4, price: 50, author: "Frances Hodgson Burnett", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpdZ4YIQqCZY7KkBZAtoXW3In6NckcmV0lOXQz4FOjvcVeHK3n3F6fSAtCqTlSZj2mqw&usqp=CAU" },
        { name: "Charlotte's Web", code: 6, price: 75, author: "E.B White", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5vOCXX8NEPIK0fAAm6hNOYqMjYQmzbYUQw&usqp=CAU" },
        { name: "Wonder", code: 8, price: 75, author: "R.J Palacio", src: "https://bookshelf.ca/i/size/o/product_images--3--9781524720193/w/250" }
    ],
    selectBook: null,
    selectBookForEdit: null,
    bookAdd:false
}
export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                selectBook: state.selectBook,
                selectBookForEdit: state.selectBookForEdit,
                arr: [...state.arr, action.payload],
                bookAdd:false
            }
        case "DELETE_BOOK":
            return {
                selectBook: state.selectBook,
                selectBookForEdit: state.selectBookForEdit,
                arr: state.arr.filter(item => item.code !== action.payload),
                bookAdd:false
            }
        case "SELECT_BOOK":
            return {
                selectBook: action.payload,
                selectBookForEdit: state.selectBookForEdit,
                arr: state.arr,
                bookAdd:false
            }
        case "SELECT_BOOK_FOR_EDIT":
            return {
                selectBook: state.selectBook,
                selectBookForEdit: action.payload,
                arr: state.arr,
                bookAdd:false
            }
        case "SAVE_EDITED_BOOK":
            let copy = state.arr.map(item => {
                if (item.code !== action.payload.code)
                    return item;
                return action.payload;
            })
            return {
                selectBook: state.selectBook,
                selectBookForEdit: null,
                arr: copy,
                bookAdd:false
            }
        case "SHOW_FORM":
            return{
                selectBook: state.selectBook,
                selectBookForEdit: state.selectBookForEdit,
                arr: state.arr,
                bookAdd:action.payload
            }    
            case "HIDE_BOOK_DETAILS":
                return{
                    selectBook: null,
                    selectBookForEdit: state.selectBookForEdit,
                    arr: state.arr,
                    bookAdd:false
                }

        default: return state; 
    }
}