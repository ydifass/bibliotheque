import React, {FC, useEffect, useState} from 'react';
import styles from './bookList.module.scss';
import useBookSA from '../../../service/applicatif/book.sa.ts';
import './../../../index.css';
import {Book} from "../../../data/DTO/Book.tsx";
import UpdateBook from "../updateBook/updateBook.tsx";
import BookItem from "../bookItem/bookItem.tsx";
interface BookListProps {}

const BookList: FC<BookListProps> = () => {

    const [books, setBooks] = useState<Book[]>([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks,@typescript-eslint/no-unused-vars
    const {getAllBooks} = useBookSA();
    const {deleteBook} = useBookSA();
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [openModal, setOpenModal] = useState(false);

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

    const onDeleteBook = (id: string) => {
        console.log(`Delete book with id: ${id}`);
        deleteBook(id);
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    }

    const handleEditClick = (book: Book) => {
        setSelectedBook(book);
        setOpenModal(true);
    };

    const handleUpdateBook = (updatedBook: Book) => {
        setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
        setOpenModal(false);  // Close modal after updating
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
                              onDelete={onDeleteBook}
                              onUpdate={() => handleEditClick(book)}>
                    </BookItem>
                </div>

            ))
        }
        {selectedBook && (
            <UpdateBook
                bookData={selectedBook}
                openModal={openModal}
                setOpenModal={setOpenModal}
                onUpdateBook={handleUpdateBook}
            />
        )}
    </div>
);
}

export default BookList;
