import useAxios from "../../common/hooks/axios-ex.ts";
import configs from "../../data/constants/Configs.ts";
import {book} from "../../data/constants/Urls.ts";


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