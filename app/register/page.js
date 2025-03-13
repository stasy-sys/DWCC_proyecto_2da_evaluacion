'use client'
import React from 'react';
import { useState } from 'react';
import { redirect } from 'next/navigation';

import styles from './page.module.css';

import User from '@/app/models/User';
import UserRepository from '@/app/repositories/UserRepository';
import HeaderComponent from '../components/HeaderComponent';

export default function Register() {
    const userRepo = new UserRepository();
    const [user, setUser] = useState(userRepo.getActiveUser());
    const [hasWrongCredentials, setHasWrongCredentials] = useState(false);
    function logOutUser(user){
        userRepo.setActiveUser(null);
        setUser(null);
    }
    function loginOrRegister(formData){
        setHasWrongCredentials(false);
        const username = formData.get("username");
        let user = userRepo.getByUsername(username);
        if (user === undefined) {
            user = new User(
                formData.get("username"),
                formData.get("password"),
                formData.get("isAdmin"),
            );
        }

        if (user.password != formData.get("password")){
            setHasWrongCredentials(true);
            return;
        }
        userRepo.save(user);
        setUser(user);
        userRepo.setActiveUser(user);
        redirect(`/shop`);
    }
    return <>
        <HeaderComponent user={user}/>
        <form action={loginOrRegister} className={styles.registry} autoComplete="off">
            <h3>Register/Login</h3>
            {user !== null && (<i>You're already logged in.
                <button onClick={() => logOutUser(user)}>Log out</button>
            </i>)}
            <i className={styles.error} hidden={!hasWrongCredentials}>
                You entered the wrong credentials. Try again.
            </i>
            {user === null && (<>
                <span>
                    <label htmlFor="username">Username:</label>
                    <input required={true} type="text" name="username"/>
                </span>
                <span>
                    <label htmlFor="password">Password:</label>
                    <input required={true} type="password" name="password"/>
                </span>
                <span>
                    <label htmlFor="password">isAdmin:</label>
                    <input type="checkbox" name="isAdmin" value="true"/>
                </span>
                <input type="submit" value="Register/Login"/>
            </>)}
        </form>
    </>;
}