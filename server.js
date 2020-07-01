const app = require('./src/router');
const Database = require('./src/database');

app.locals.db = new Database('./Data/blog.db');
app.locals.db.run(
  `create table if not exists blog(name varchar(20), content varchar(10000), date date)`
);

app.listen(8000, () => console.log('started listening on ', 8000));
