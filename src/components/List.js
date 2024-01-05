import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { showForm } from "../store/actions/book";

const List = () => {
    let arr = useSelector((state) => { return state.arr });
    let dispatch=useDispatch();
    return (<>
        <h1>shelf of books</h1>
        <ul>
            {arr.map(item => <li key={item.code}  ><ListItem book={item} /></li>)}
        </ul>
        <input onClick={() => { dispatch(showForm(true)) }} type="button" value="addNewBook" />
    </>);
}

export default List;