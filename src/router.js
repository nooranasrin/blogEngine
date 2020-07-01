const express = require('express');
const app = express();
const handlers = require('./handlers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(handlers.attachAppDetails);

app.post('/post-blog', handlers.saveBlog);

module.exports = app;
