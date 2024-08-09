import React, { FC, useRef, useState } from 'react';
import styles from './addBook.module.scss';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { v4 as uuidv4 } from 'uuid';
import useBookSA from '../../../service/applicatif/book.sa.ts';
import {Book} from "../../../data/DTO/Book.tsx";

interface AddBookProps {
    loadBooks: () => void;
}

const AddBook: FC<AddBookProps> = ({loadBooks}) => {
    const [openModal, setOpenModal] = useState(false);
    const [bookData, setBookData] = useState<Book>({id: "", title: '', author: '', type: '' });
    const emailInputRef = useRef<HTMLInputElement>(null);
    const {addBook} = useBookSA();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newBookId = uuidv4();
        const newBook = {id: newBookId, title: bookData.title, author: bookData.author, type: bookData.type};
        try {
            await addBook(newBook);
            setBookData({id: '', title: '', author: '', type: ''});
            setOpenModal(false);
            loadBooks();
        } catch (error) {
            console.error('Erreur lors de l\'ajout du livre', error);
        }
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookData(prevData => ({ ...prevData, title: e.target.value }));
    };

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookData(prevData => ({ ...prevData, author: e.target.value }));
    };

    const handletypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookData(prevData => ({ ...prevData, type: e.target.value }));
    };

    return (
        <div className={styles.addBook}>
            <Button color="green" onClick={() => setOpenModal(true)}>
                Ajouter un nouveau livre
            </Button>
            <Modal className="modal-background" show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Ajouter un nouveau livre</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Titre du livre" />
                            </div>
                            <TextInput
                                id="title"
                                value={bookData.title}
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
                                value={bookData.author}
                                onChange={handleAuthorChange}
                                placeholder="Auteur du livre"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="type" value="type du livre" />
                            </div>
                            <TextInput
                                id="type"
                                value={bookData.type}
                                onChange={handletypeChange}
                                placeholder="type du livre"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <Button type="submit" color="green">
                                Ajouter
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddBook;