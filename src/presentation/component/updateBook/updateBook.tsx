import React, {FC, useEffect, useState} from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Book } from "../../../data/DTO/Book.tsx";
import useBookSA from '../../../service/applicatif/book.sa.ts';

interface UpdateBookProps {
    bookData: Book;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

const UpdateBook: FC<UpdateBookProps> = ({ bookData, openModal, setOpenModal}) => {

    const [updatedBookData, setUpdatedBookData] = useState<Book>(bookData);
    const {updateBook} = useBookSA();

    useEffect(() => {
        setUpdatedBookData(bookData);
    }, [openModal]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateBook(updatedBookData);
        setOpenModal(false);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedBookData(prevData => ({ ...prevData, title: e.target.value }));
    };

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedBookData(prevData => ({ ...prevData, author: e.target.value }));
    };

    const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedBookData(prevData => ({ ...prevData, type: e.target.value }));
    };

    return (
        <Modal
            className="modal-background"
            show={openModal} size="md"
            popup
            onClose={() => setOpenModal(false)}>
            <Modal.Header />
            <Modal.Body>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Modifier le livre</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Titre du livre" />
                        </div>
                        <TextInput
                            id="title"
                            value={updatedBookData.title}
                            onChange={handleTitleChange}
                            placeholder="Titre du livre"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="author" value="Auteur du livre" />
                        </div>
                        <TextInput
                            id="author"
                            value={updatedBookData.author}
                            onChange={handleAuthorChange}
                            placeholder="Auteur du livre"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="genre" value="Genre du livre" />
                        </div>
                        <TextInput
                            id="genre"
                            value={updatedBookData.type}
                            onChange={handleGenreChange}
                            placeholder="Genre du livre"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <Button type="submit" color="green" onClick={handleSubmit}>
                            Modifier
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateBook;

