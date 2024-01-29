import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookInfoType } from './types/index';

function App() {
  const [count, setCount] = useState(0);
  const [wishList, setWishList] = useState<BookInfoType[]>([]);
  const [readingList, setReadingList] = useState<BookInfoType[]>([]);
  const [readList, setReadList] = useState<BookInfoType[]>([]);
  const [nameList, setNameList] = useState(' desejos:');
  const [isWishList, setIsWishList] = useState(true);
  const [isReadingList, setIsReadingList] = useState(false);
  const [isReadList, setIsReadList] = useState(false);

  const handleWishList = () => {
    setWishList([...wishList, data[count]]);
  };

  const handleReadingList = () => {
    setReadingList([...readingList, data[count]]);
  };

  const handleReadList = () => {
    setReadList([...readList, data[count]]);
  };

  const handleIsWishList = () => {
    setIsReadList(false);
    setIsReadingList(false);
    setIsWishList(true);
    setNameList(' desejos:');
  };

  const handleIsReadingList = () => {
    setIsWishList(false);
    setIsReadList(false);
    setIsReadingList(true);
    setNameList(' leitura:');
  };

  const handleIsReadList = () => {
    setIsWishList(false);
    setIsReadingList(false);
    setIsReadList(true);
    setNameList(' lidos:');
  };

  const handleNextPage = () => {
    if (count + 1 < data.length) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={ data[count] } showDetails />
        <div className="selector-buttons">
          <button onClick={ handleWishList }>Adicionar à lista de desejos</button>
          <button onClick={ handleReadingList }>Adicionar à lista de leitura</button>
          <button onClick={ handleReadList }>Adicionar à lista de lidos</button>
          <button onClick={ handleNextPage }>Próximo livro</button>
        </div>
      </div>

      <div className="list-buttons">
        <button onClick={ handleIsWishList }>Exibir lista de desejos</button>
        <button onClick={ handleIsReadingList }>Exibir lista de leitura</button>
        <button onClick={ handleIsReadList }>Exibir lista de lidos</button>
      </div>
      <h1>
        Lista de
        { nameList }
      </h1>
      {isWishList && <BookList books={ wishList } /> }
      {isReadingList && <BookList books={ readingList } /> }
      {isReadList && <BookList books={ readList } /> }
    </div>
  );
}

export default App;
