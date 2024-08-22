import {addBook, deleteBook, getAllBooks, updateBook} from "../bdl/book.bdl.ts";
import {Book} from "@DTO/Book.tsx";

const useBookSA = () => {
    return {
        getAllBooks: async () =>{
            // eslint-disable-next-line
            try{
                return await getAllBooks();
            } catch (exception) {
                throw exception;
            }
        },
        deleteBook: async (id: number) => {
            try {
                const res = await deleteBook(id);
                return Promise.resolve(res);
            } catch (exception) {
                return Promise.reject(exception);
            }
        },
        addBook: async (bookData: unknown)=> {
            // eslint-disable-next-line no-useless-catch
           try {
               return await addBook(bookData);
           } catch (exception) {
               throw exception;
           }
        },
        updateBook: async (bookData: Book) => {
            // eslint-disable-next-line no-useless-catch
            try{
                return await updateBook(bookData);
            } catch (exception) {
                throw exception;
            }
        }
    };
}

export default useBookSA;