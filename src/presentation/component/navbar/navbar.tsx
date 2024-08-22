import { FC } from 'react';
import styles from './navbar.module.scss';
import {Button, Navbar, TextInput} from "flowbite-react";
import { HiSearch } from 'react-icons/hi';

interface navbarProps {}

const navbar: FC<navbarProps> = () => {
    return (<div className={styles.navbar}>
            <Navbar fluid={true} rounded={true} className="bg-gray-800">
                <Navbar.Brand href="/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Bibliothèque
        </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <div className="relative">
                        <TextInput
                            id="search-navbar"
                            type="search"
                            placeholder="Rechercher..."
                            className="pr-10"
                        />
                        <Button
                            size="xs"
                            className="absolute right-0 top-0 mt-2.5 mr-2 p-1 bg-red-600"
                            onClick={() => alert('Recherche déclenchée')}
                        >
                            <HiSearch className="h-4 w-4 text-black" />
                        </Button>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}
export default navbar;
