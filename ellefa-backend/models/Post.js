const db = require("../config/db");

class Post {
    constructor(username, password, items){
        this.username = username;
        this.password = password;
        this.items = items;
    }
    save() {
        let sql = `
        INSERT INTO posts(
            username,
            password,
            items
        )
        VALUES(
            "${this.username}",
            "${this.password}",
            '${JSON.stringify(this.items)}'
        )
        `;
        return db.execute(sql);
    }
    static delete(id) {
        let sql = `
        DELETE FROM posts
        WHERE id = ${id};
        `;
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT items FROM posts;";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT items FROM posts WHERE id = ${id};`;
        return db.execute(sql);
    }
}

module.exports = Post;