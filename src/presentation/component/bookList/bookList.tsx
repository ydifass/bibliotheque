import {FC, useEffect, useState} from 'react';
import styles from './bookList.module.scss';
import useBookSA from '../../../service/applicatif/book.sa.ts';
import BookItem, {BookItemProps} from "../bookItem/bookItem.tsx";
interface BookListProps {}

const BookList: FC<BookListProps> = () => {

    const [books, setBooks] = useState<BookItemProps[]>([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks,@typescript-eslint/no-unused-vars
    const {getAllBooks} = useBookSA();

    useEffect(() => {
        getAllBooks().then(
            (response) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setBooks(response);
            },
            (exception) => {
                console.log(exception);
            }
        );
    }, []);

    const deleteBook = (id: string) => {
        // Supprimez le livre de votre source de données
        console.log(`Delete book with id: ${id}`);

        // Mettez à jour l'état books pour déclencher un nouveau rendu
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    }

    return (
    <div className={`${styles.BookList} flex flex-wrap`}>
        {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            books?.map((book, index) => (
                <div className="w-1/5 p-1" key={index}>
                    <BookItem
                              title={book.title}
                              id={book.id}
                              coverImage={"https://via.placeholder.com/150/92c952"}>
                    </BookItem>
                </div>
            ))
        }
    </div>
);
}

export default BookList;
