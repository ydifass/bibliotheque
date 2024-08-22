import { FC } from 'react';
import { Card } from "flowbite-react";
import Button, {ButtonType} from "../button/button.tsx";
export interface BookItemProps {
    id: number;
    title: string;
    onDelete: (id: number) => void;
    onUpdate: () => void;
}

const BookItem: FC<BookItemProps> = ({ id, title, onDelete, onUpdate}) => {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://via.placeholder.com/150/92c952">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Button
                title={"Retirer"}
                type={ButtonType.Delete}
                onClick={() => onDelete(id)}>
            </Button>
            <Button
                title={"Modifier"}
                type={ButtonType.Update}
                onClick={() => onUpdate()}>
            </Button>
        </Card>
    )
};

export default BookItem;
