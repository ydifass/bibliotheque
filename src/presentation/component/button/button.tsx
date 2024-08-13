import { FC } from 'react';
import classNames from "classnames";

export enum ButtonType {
    Default = "default",
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete"
}

type Button = {
    title: string;
    type: ButtonType;
    onClick: (() => void) | undefined;
    classname?: string;
}

const Button: FC<Button> = ({
    title,
    type,
    onClick
}: Button) => {
    return (
        <button
            className={classNames(
                type=== ButtonType.Default ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[300px]": "",
                type=== ButtonType.Delete ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[200px]" : "",
                type=== ButtonType.Update ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[200px]" : "",
            )}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Button;
