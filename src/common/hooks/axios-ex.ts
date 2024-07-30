import axios from "axios";

interface Exception {
    response?: {
        data?: unknown;
    };
}

const handleException = (exception: Exception, error: (data: unknown) => void) => {
    if (exception.response && exception.response.data) {
        error(exception.response.data);
    } else {
        error(exception);
    }
};

const useAxios = () => {
    const getAxios = (
        url: string
    ) =>
        new Promise<unknown>((resolve, reject) => {
            axios
                .get(url)
                .then((response) => resolve(response?.data))
                .catch((exception) => handleException(exception, reject));
        });
    return {
        getAxios,
    };
};

export default useAxios;