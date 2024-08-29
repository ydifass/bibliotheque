import configs from "../../data/constants/Configs.ts";
import {book} from "../../data/constants/Urls.ts";
import axios from "axios";
import {Book} from "@DTO/Book.tsx";
import {HelpPageDTO} from "@DTO/HelpPage.dto.ts";


// eslint-disable-next-line react-hooks/rules-of-hooks
//const {getAxios} = useAxios();

export const getAllBooks = (page?: number, size?: number) => {
    return new Promise<HelpPageDTO<Book>>((success, reject) => {
        axios.get(`${configs.booksBaseUrl}${book.baseUrl}${book.allBooks}?page=${page}&size=${size}`)
            .then((response) => success(response.data))
            .catch((exception) => reject(exception));
    });
};
export const deleteBook = async (id: number) => {
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