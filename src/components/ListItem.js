import { useDispatch } from "react-redux";
import { deleteBook, selectBookForEdit, selectBook, hideBookDetails } from "../store/actions/book.js"
import { useState } from "react";

const ListItem = ({ book }) => {
    let dispatch = useDispatch();
    const [detailsVisible, setdetailsVisible] = useState(false);
    const click = () => {
        if (!detailsVisible)
            dispatch(selectBook(book));
        else
            dispatch(hideBookDetails())
        setdetailsVisible(!detailsVisible)
    }
    return (<div>
        <h2>{book.name}</h2>
        <h2>{book.code}</h2>
        <input onClick={() => { dispatch(deleteBook(book.code)) }} type="button" value="delete" />
        <input onClick={() => { dispatch(selectBookForEdit(book)) }} type="button" value="edit" />
        <input onClick={click} type="button" value={detailsVisible ? "hide" : "present"} />
    </div>
    );
}

export default ListItem;