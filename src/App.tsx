import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookInfoType } from './types/index';

const bookIndexStart = 10;
const bookIndexEnd = 15;
const placeHolderList = data.slice(bookIndexStart, bookIndexEnd); // esse código deverá ser excluído após a implementação do requisito 2

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(' ...');
  const [wishList, setWishList] = useState<BookInfoType[]>([]);
  const [isWishList, setIsWishList] = useState(false);

  const handleWishList = () => {
    setWishList([...wishList, data[count]]);
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
          <button>Adicionar à lista de leitura</button>
          <button>Adicionar à lista de lidos</button>
          <button onClick={ handleNextPage }>Próximo livro</button>
        </div>
      </div>

      <div className="list-buttons">
        <button>Exibir lista de desejos</button>
        <button>Exibir lista de leitura</button>
        <button>Exibir lista de lidos</button>
      </div>
      <h1>
        Lista de
        {list}
      </h1>
      <BookList books={ wishList } />
    </div>
  );
}

export default App;
