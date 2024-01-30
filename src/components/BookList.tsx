import { BookInfoType } from '../types';
import Book from './Book';

type BookListProps = {
  books: BookInfoType[];
  removeBook: (id: number) => void;
};

export default function BookList(props: BookListProps) {
  const { books, removeBook } = props;

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={ book.id }>
          <Book
            bookInfo={ book }
            showDetails={ false }
            showButton
            removeBook={ removeBook }
          />
        </li>
      ))}
    </ul>
  );
}
