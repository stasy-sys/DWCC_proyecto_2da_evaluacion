'use client'
import styles from './UserMenuComponent.module.css'

import UserRepository from '@/app/repositories/UserRepository';

export default function UserMenuComponent() {
    const userRepo = new UserRepository();
    //const [user, setUser] = useState(undefined);
    let user = userRepo.getActiveUser();
    return <>
        <span className={styles.user_menu}>😗👤</span>
    </>
}

