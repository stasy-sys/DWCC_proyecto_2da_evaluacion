export default class UserRepository {
    save(user) {
        let users = JSON.parse(localStorage.getItem("users") || '{}');

        if (user.id != null && users[user.id] === undefined) {
            console.error(`id does not exist in the users storage. id: ${user.id}`);
            return;
        }

        if (user.id == null){
            let lastId = parseInt(localStorage.getItem("users-last-id") || "0");
            lastId += 1;
            user.id = lastId;
            localStorage.setItem("users-last-id", lastId);
        }

        users[user.id] = user;
        localStorage.setItem('users', JSON.stringify(users));
    }

    getAll() {
        return JSON.parse(localStorage.getItem("users") || '{}');
    }

    getById(id){
        return JSON.parse(localStorage.getItem("users") || '{}')[id];
    }

    delete(user) {
        let users = JSON.parse(localStorage.getItem("users") || '{}');
        delete users[user.id];
        localStorage.setItem('users', JSON.stringify(users));
    }
}