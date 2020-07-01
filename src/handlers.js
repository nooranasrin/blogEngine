const getAddBlogQuery = (details) => {
  return `insert into blog values("${details.title}", "${details.content}",date('now'))`;
};

const attachAppDetails = function (req, res, next) {
  req.db = req.app.locals.db;
  next();
};

const saveBlog = function (req, res) {
  const sql = getAddBlogQuery(req.body);
  req.db
    .insert(sql)
    .then(() => res.send('successfully saved'))
    .catch((err) => console.log(err));
};

module.exports = { saveBlog, attachAppDetails };
