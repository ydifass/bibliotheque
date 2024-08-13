import React, {FC} from 'react';
import styles from './home.module.scss';
import BookList from "../bookList/bookList.tsx";
import Navbar from "../navbar/navbar.tsx";

interface homeProps {}

const home: FC<homeProps> = () => (
  <div className={styles.home}>
    <Navbar></Navbar>
    <BookList></BookList>
  </div>
);

export default home;
