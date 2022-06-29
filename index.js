const express = require('express');
const mongoose = require('mongoose');
const reportsRoutes = require('./routes/reportsRoutes');
const storiesRoutes = require('./routes/storiesRoutes');
const dataRoutes = require('./routes/dataRoutes');
const app = express();
// $PORT= 5000 heroku
// $DATABASE_URL = heroku
// const dbURI = local 'mongodb://127.0.0.1:27017/node-netninja';
const dbURI = process.env.$DATABASE_URI;
mongoose
  .connect(dbURI)
  .then((result) => app.listen(process.env.$PORT))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

// static files
app.use(express.static('./views/assets'));
app.use(express.urlencoded({ extended: true })); // for accepting form data

// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
// app.get('/about', (req, res) => {
//   res.render('about', { title: 'About' });
// });
// app.get('/sign-in', (req, res) => {
//   res.render('about', { title: 'Sign In' });
// });
// app.get('/newsletter', (req, res) => {
//   res.render('about', { title: 'Newsletter' });
// });

app.use('/reports', reportsRoutes);
// app.use('/stories', storiesRoutes);
// app.use('/data', dataRoutes);

// 404
app.use((req, res) => {
  res
    .status(404)
    .render('404', { title: 'sorry, this page does not exist ):' });
});
