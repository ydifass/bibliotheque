import {addBook, deleteBook, getAllBooks, updateBook} from "../bdl/book.bdl.ts";
import {Book} from "@DTO/Book.tsx";
import {HelpPageDTO} from "@DTO/HelpPage.dto.ts";

const useBookSA = () => {
    return {
        getAllBooks: (page: number, size: number) =>{
            return new Promise<HelpPageDTO<Book>>((success, reject) => {
                getAllBooks(page, size)
                    .then((response) => success(response))
                    .catch((exception) => reject(exception));
            });
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