const express = require('express');
const path = require('path');
const profile = require('./data/profile.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Home
app.get('/', (req, res) => {
  res.render('index', { profile });
});

// Blog list
app.get('/blog', (req, res) => {
  const { category } = req.query;
  const posts = category
    ? profile.posts.filter(p => p.category === category)
    : profile.posts;
  const categories = [...new Set(profile.posts.map(p => p.category))];
  res.render('blog', { profile, posts, categories, activeCategory: category || null });
});

// Blog post (demo)
app.get('/blog/:id', (req, res) => {
  const post = profile.posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.redirect('/blog');
  res.render('post', { profile, post });
});

// Links page
app.get('/links', (req, res) => {
  res.render('links', { profile });
});

// API: profile data
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
