import React, {FC} from 'react';
import styles from './home.module.scss';
import BookList from "../bookList/bookList.tsx";

interface homeProps {}

const home: FC<homeProps> = () => (
  <div className={styles.home}>
    <BookList></BookList>
  </div>
);

export default home;
