import { BookInfoType } from '../types';

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
        && <button onClick={ () => removeBook(id) }>Excluir</button>
      }
    </div>
  );
}
