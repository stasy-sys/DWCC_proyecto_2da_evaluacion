export default class UserRepository {
    save(user) {
        let users = JSON.parse(localStorage.getItem("users") || '{}');
        users[user.username] = user;
        localStorage.setItem('users', JSON.stringify(users));
    }

    getAll() {
        return JSON.parse(localStorage.getItem("users") || '{}');
    }

    getByUsername(username){
        return JSON.parse(localStorage.getItem("users") || '{}')[username];
    }

    delete(user) {
        let users = JSON.parse(localStorage.getItem("users") || '{}');
        delete users[user.id];
        localStorage.setItem('users', JSON.stringify(users));
    }

    getActiveUser() {
        return JSON.parse(localStorage.getItem("activeUser"));
    }

    setActiveUser(user) {
        localStorage.setItem("activeUser", JSON.stringify(user));
    }
}