const requestXHR = (method, url, data, callback) => {
  const req = new XMLHttpRequest();
  req.open(method, url);
  data && req.setRequestHeader('Content-Type', 'application/json');
  const content = data ? JSON.stringify(data, null, 2) : null;
  req.send(content);

  req.onload = function () {
    if (this.status !== 200) return;
    let result = this.responseText;
    const contentType = this.getResponseHeader('Content-Type');
    if ('application/json; charset=utf-8' === contentType) {
      result = JSON.parse(this.responseText);
    }
    callback(result);
  };
};

const getJSON = (url, callback) => {
  requestXHR('GET', url, null, callback);
};

const postJSON = (url, data, callback) => {
  requestXHR('POST', url, data, callback);
};

const goToHome = function (res) {
  document.location = `../index.html`;
};

const saveBlog = function () {
  const blog = {};
  blog.title = document.getElementById('title').value;
  blog.content = document.getElementById('blog').value;
  postJSON('post-blog', blog, goToHome);
};

const showBlogs = function (blogs) {
  let element = '';
  blogs.forEach((blog) => {
    element += `<article>
      <h1> ${blog.name} </h1>
      <date>${blog.date}</date>
      <p> ${blog.content} </p>
      <hr class="article-divider" />
    </article> `;
  });
  document.getElementById('container').innerHTML = element;
};

const main = function () {
  getJSON('get-blogs', showBlogs);
};

window.onload = main;
