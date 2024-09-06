import React, {FC, useEffect, useState} from 'react';
import styles from './bookList.module.scss';
import useBookSA from '@sa/book.sa.tsx'
import './../../../index.css';
import {Book} from "@DTO/Book.tsx";
import UpdateBook from "../updateBook/updateBook.tsx";
import BookItem from "../bookItem/bookItem.tsx";
import AddBook from "../addBook/AddBook.tsx";
import Button, {ButtonType} from "../button/button.tsx";
import {SIZE_PER_PAGE} from "../../../data/constants";
import {Pagination} from "flowbite-react";

interface BookListProps {}

const BookList: FC<BookListProps> = () => {

    const [books, setBooks] = useState<Book[]>([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks,@typescript-eslint/no-unused-vars
    const { getAllBooks } = useBookSA();
    const { deleteBook } = useBookSA();
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const [totalPages, setTotalPages] = React.useState<number>(0);
    const [sortOption, setSortOption] = useState<{property: string, direction: 'ASC' | 'DESC'}>({property: 'title', direction: 'ASC'});
    // const [totalElements, setTotalElements] = React.useState<number>(0);

    useEffect(() => {
        loadBooks();
    }, [openModal, currentPage]);

    const loadBooks = async () => {
        try {
            const response = await getAllBooks(currentPage, SIZE_PER_PAGE, sortOption);
            setBooks(response.content);
            // setTotalElements(response.totalElements)
            setCurrentPage(response.pageable.pageNumber);
            setTotalPages(response.totalPages);
            console.log(currentPage)
        } catch (exception) {
            console.log(exception);
        }
    }

    const onDeleteBook = async (id: number) => {
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

    const handleSortChange = async (property: string) => {
        setSortOption(prevOption => ({
            property: property,
            direction: prevOption.direction === 'ASC' ? 'DESC' : 'ASC'
        }));
        const books = await getAllBooks(currentPage, SIZE_PER_PAGE, sortOption);
        setBooks(books.content);
    };

    return (
        <div className={`${styles.BookList} flex flex-col items-center`}>
            <div className="flex justify-between items-center mb-8 gap-4 mt-10">
                <Button onClick={() => handleSortChange('title')} title={'Titre'} type={ButtonType.Default}></Button>
                <Button onClick={()=> handleSortChange('author')} type={ButtonType.Default} title={'Autheur'}></Button>
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
            <Pagination
                className="p-5"
                currentPage={currentPage}
                onPageChange={page => setCurrentPage(page - 1)}
                totalPages={totalPages}/>
        </div>
    );
}

export default BookList;
