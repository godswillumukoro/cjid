const Report = require('../models/report');

const reportIndex = (req, res) => {
  Report.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      // res.send(result);
      res.render('reports/index', { title: 'All Reports', reports: result });
    })
    .catch((err) => {
      res.status(404).render('404', { title: 'Report not found ):' });
    });
};

const reportDetails = (req, res) => {
  const { id } = req.params;
  Report.findById(id)
    .then((result) => {
      res.render('reports/single-blog', {
        title: 'Single Report',
        reports: result,
      });
    })
    .catch((err) => {
      res.status(404).render('404', { title: 'Report not found ):' });
    });
};

const reportCreateGet = (req, res) => {
  res.render('reports/create', { title: 'Create a new Report' });
};

const reportCreatePost = (req, res) => {
  const report = new Report(req.body);

  report
    .save()
    .then((result) => {
      res.redirect('/reports');
    })
    .catch((err) => {
      console.log(err);
    });
};

const reportDelete = (req, res) => {
  const { id } = req.params;
  Report.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/reports' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  reportIndex,
  reportDetails,
  reportCreateGet,
  reportCreatePost,
  reportDelete,
};
