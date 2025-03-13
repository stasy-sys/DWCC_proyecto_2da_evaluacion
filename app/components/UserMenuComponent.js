'use client'
import { redirect } from 'next/navigation';
import { useState } from 'react';

import styles from './UserMenuComponent.module.css'

import UserRepository from '@/app/repositories/UserRepository';

export default function UserMenuComponent({user}) {
    return <>
        <span className={styles.user_menu}>
            {user &&<>
                {user.username}
            </>}
            <a href="#" onClick={() => redirect("/register")}>
                {(user === null || !user.isAdmin) &&<>👤</>}
                {(user !== null && user.isAdmin) &&<>🦹‍♀️</>}
            </a>
        </span>
    </>
}

