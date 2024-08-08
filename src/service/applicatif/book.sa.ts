import {addBook, deleteBook, getAllBooks, updateBook} from "../bdl/book.bdl.ts";
import {Book} from "../../data/DTO/Book.tsx";

const useBookSA = () => {
    return {
        getAllBooks: () =>
            // eslint-disable-next-line no-async-promise-executor
            new Promise<unknown>(async (success, error) => {
                await getAllBooks()
                    .then((res) => {
                        // logger.debug('res sa ===>', res);
                        success(res);
                    })
                    .catch((exception) => error(exception));
            }),
        deleteBook: (id: string) => {
            // eslint-disable-next-line no-async-promise-executor
            new Promise<unknown>(async (success, error) => {
                await deleteBook(id)
                    .then((res) => {
                        // logger.debug('res sa ===>', res);
                        success(res);
                    })
                    .catch((exception) => error(exception));
            })
        },
        addBook: (bookData: unknown)=> {
            // eslint-disable-next-line no-async-promise-executor
            new Promise<unknown>(async (success, error) => {
                await addBook(bookData)
                    .then((res) => {
                        // logger.debug('res sa ===>', res);
                        success(res);
                    })
                    .catch((exception) => error(exception));
            })
        },
        updateBook: (bookData: Book) => {
            // eslint-disable-next-line no-async-promise-executor
            new Promise<unknown>(async (success, error) => {
                await updateBook(bookData)
                   .then((res) => {
                        success(res);
                    })
                   .catch((exception) => error(exception));
            })
        }
    };
}

export default useBookSA;