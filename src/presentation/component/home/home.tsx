import React, {FC} from 'react';
import styles from './home.module.scss';
import BookList from "../bookList/bookList.tsx";
import AddBook from "../addBook/AddBook.tsx";

interface homeProps {}

const home: FC<homeProps> = () => (
  <div className={styles.home}>
    <div>
        {/*<Button title={'Add book'} type={ButtonType.Create} onClick={}></Button>*/}
        <AddBook></AddBook>
    </div>
    <BookList></BookList>
  </div>
);

export default home;
