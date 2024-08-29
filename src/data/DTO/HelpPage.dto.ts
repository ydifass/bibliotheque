export type HelpPageDTO<T> = {
    content: T[];
    number: number;
    size: number;
    totalElements: number;
    pageable: {
        sort: {
            sorted: boolean;
            empty: boolean;
            unsorted: boolean;
        };
        pageNumber: number;
        offset: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    sort: {
        sorted: boolean;
        empty: boolean;
        unsorted: boolean;
    };
    first: boolean;
    empty: boolean;
    numberOfElements: number;
};
