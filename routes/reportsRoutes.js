const express = require('express');
const reportsController = require('../controllers/reportsController');

const router = express.Router();
router.get('/create', reportsController.reportCreateGet);

router.get('/', reportsController.reportIndex);

router.get('/:id', reportsController.reportDetails);

router.post('/', reportsController.reportCreatePost);

router.delete('/:id', reportsController.reportDelete);

module.exports = router;
