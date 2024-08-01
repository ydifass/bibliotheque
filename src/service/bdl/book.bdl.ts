import useAxios from "../../common/hooks/axios-ex.ts";
import configs from "../../data/constants/Configs.ts";
import {book} from "../../data/constants/Urls.ts";
import axios from "axios";


// eslint-disable-next-line react-hooks/rules-of-hooks
const {getAxios} = useAxios();

export const getAllBooks = () => {
    return new Promise<unknown>((resolve, reject) => {
        getAxios(
            `${configs.booksBaseUrl + book.baseUrl + book.allBooks}`
        ).then(response => resolve(response))
            .catch((exception: unknown) => reject(exception));
    });
};

export const deleteBook = (id: string) => {
    return new Promise<unknown>((resolve, reject) => {
        axios.delete(
            `${configs.booksBaseUrl + book.baseUrl + book.deleteBook}/${id}`
        ).then(response => resolve(response))
            .catch((exception: unknown) => reject(exception));
    });
}