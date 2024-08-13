import React, {FC, useEffect, useState} from 'react';
import styles from './bookList.module.scss';
import useBookSA from '../../../service/applicatif/book.sa.ts';
import './../../../index.css';
import {Book} from "../../../data/DTO/Book.tsx";
import UpdateBook from "../updateBook/updateBook.tsx";
import BookItem from "../bookItem/bookItem.tsx";
import AddBook from "../addBook/AddBook.tsx";
import Button, {ButtonType} from "../button/button.tsx";

interface BookListProps {}

const BookList: FC<BookListProps> = () => {

    const [books, setBooks] = useState<Book[]>([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks,@typescript-eslint/no-unused-vars
    const { getAllBooks } = useBookSA();
    const { deleteBook } = useBookSA();
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        loadBooks();
    }, [openModal]);

    const loadBooks = async () => {
        try {
            const response = await getAllBooks();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setBooks(response);
        } catch (exception) {
            console.log(exception);
        }
    }

    const onDeleteBook = async (id: string) => {
        console.log(`Delete book with id: ${id}`);
        try {
            await deleteBook(id);
            await loadBooks();
        } catch (exception) {
            console.log("Erreur lors de la suppression du livre:", exception);
        }
    }

    const handleEditClick = (book: Book) => {
        setSelectedBook(book);
        setOpenModal(true);
    };

    const handleUpdateBook = async (updatedBook: Book) => {
        setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
        setOpenModal(false);  // Close modal after updating
        await loadBooks();
    }

    return (
        <div className={`${styles.BookList} flex flex-col items-center`}>
            <div className="flex justify-between items-center mb-8 gap-4 mt-10">
                <Button onClick={()=> console.log('filter')} title={'Filtrer'} type={ButtonType.Default}></Button>
                <Button onClick={()=> console.log('sort')} title={'Trier'} type={ButtonType.Default}></Button>
                <AddBook loadBooks={loadBooks} />
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    books?.map((book, index) => (
                        <div className="w-1/5 p-1" key={index}>
                            <BookItem
                                title={book.title}
                                id={book.id}
                                onDelete={onDeleteBook}
                                onUpdate={() => handleEditClick(book)}
                            />
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
        </div>
    );
}

export default BookList;
