const sqlite = require('sqlite3');

class Database {
  constructor(file) {
    this.db = new sqlite.Database(file);
  }

  run(sql) {
    this.db.run(sql, (err) => err && console.log(err));
  }

  insert(sql) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, (err) => {
        err && reject(err);
        resolve();
      });
    });
  }

  selectAll(sql) {
    return new Promise((resolve) => {
      this.db.all(sql, (err, res) => resolve(res));
    });
  }

  selectOne(sql) {
    return new Promise((resolve) => {
      this.db.each(sql, (err, res) => resolve(res));
    });
  }

  close() {
    this.db.close((err) => err && console.log(err));
  }

  update(sql) {
    return this.db.run(sql);
  }
}

module.exports = Database;
