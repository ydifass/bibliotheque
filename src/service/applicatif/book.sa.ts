import {deleteBook, getAllBooks} from "../bdl/book.bdl.ts";

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
        }
    };
}

export default useBookSA;