'use client'
import styles from './HeaderComponent.module.css';
import UserMenuComponent from '@/app/components/UserMenuComponent';

export default function HeaderComponent() {
    return <>
        <header className={styles.header}>
            <span className={styles.logo}>🪭Loli shop</span>
            <span className={styles.user}><UserMenuComponent/></span>
        </header>
    </>
}

