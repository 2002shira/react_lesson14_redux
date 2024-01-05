import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';
import BookDetails from './components/BookDetails';
import { useSelector } from 'react-redux';
import EditBook from './components/EditBook';
import AddBook from './components/AddBook';

function App() {
  let selected=useSelector(state=>state.selectBook)
  let selectedForEdit=useSelector(state=>state.selectBookForEdit)
  const bookAdd = useSelector((state) => state.bookAdd);

  return (<>
    <div className="App">
      <List/>
      {selected &&< BookDetails/>}
      {selectedForEdit&&<EditBook/>}
      {bookAdd && <AddBook />}

    </div>
  </>);
}

export default App;
