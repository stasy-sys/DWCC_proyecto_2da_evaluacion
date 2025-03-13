'use client'
import { redirect } from 'next/navigation';

import styles from './HeaderComponent.module.css';
import UserMenuComponent from '@/app/components/UserMenuComponent';

export default function HeaderComponent() {
    return <>
        <header className={styles.header}>
            <span className={styles.logo}><a href="#" onClick={() => redirect("/shop")}>🪭Loli shop</a></span>
            <span className={styles.user}><UserMenuComponent/></span>
        </header>
    </>
}

