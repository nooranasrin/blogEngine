const app = require('./src/router');
const Database = require('./src/database');

const port = process.env.PORT || 8000;

app.locals.db = new Database('./Data/blog.db');
app.locals.db.run(
  `create table if not exists blog(name varchar(20), content varchar(10000), date date)`
);

app.listen(port, () => console.log('started listening on ', port));
