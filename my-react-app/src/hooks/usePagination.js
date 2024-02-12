import { useMemo } from "react";

export const usePagination = (totalPages) => {
    const result = useMemo(() => {
        const pages = [];
        for (let index = 0; index < totalPages; index++) {
            pages.push(index + 1);
        }
        return pages;
    }, [totalPages]);

    return result;
};
