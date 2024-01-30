import { BookInfoType } from '../types';
import './Book.css';

type BookProps = {
  bookInfo: BookInfoType;
  showDetails: boolean;
  showButton: boolean;
  removeBook: (id: number) => void;
};

export default function Book(props: BookProps) {
  const {
    bookInfo: { title, image, author, description, id },
    showDetails,
    showButton,
    removeBook,
  } = props;

  return (
    <div className="book">
      <img src={ image } alt={ title } />
      <h1>{title}</h1>
      <h3>{author}</h3>
      {showDetails && (
        <p>{description}</p>
      )}
      {
        showButton
        && <button className="btn" onClick={ () => removeBook(id) }>Excluir</button>
      }
    </div>
  );
}
