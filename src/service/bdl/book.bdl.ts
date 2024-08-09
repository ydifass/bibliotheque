import useAxios from "../../common/hooks/axios-ex.ts";
import configs from "../../data/constants/Configs.ts";
import {book} from "../../data/constants/Urls.ts";
import axios from "axios";
import {Book} from "../../data/DTO/Book.tsx";


// eslint-disable-next-line react-hooks/rules-of-hooks
const {getAxios} = useAxios();

export const getAllBooks = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        return await getAxios(
            `${configs.booksBaseUrl + book.baseUrl + book.allBooks}`
        );
    }catch (exception) {
        throw exception;
    }
};

export const deleteBook = async (id: string) => {
    // eslint-disable-next-line no-useless-catch
    try {
        return await axios.delete(
            `${configs.booksBaseUrl + book.baseUrl + book.deleteBook}/${id}`
        );
    } catch (exception) {
        throw exception;
    }
};

export const addBook = async (bookData: unknown) => {
    // eslint-disable-next-line no-useless-catch
    try{
        return await axios.post(
            `${configs.booksBaseUrl + book.baseUrl + book.addBook}`,
            bookData
        );
    }catch (exception) {
        throw exception;
    }
};

export const updateBook = async (bookData: Book) => {
    // eslint-disable-next-line no-useless-catch
    try {
        return await axios.put(
            `${configs.booksBaseUrl + book.baseUrl + book.updateBook}`,
            bookData
        );
    } catch (exception) {
        throw exception;
    }
};