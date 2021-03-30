const express = require('express');
const router = express.Router();
const vaersdata = require('../services/vaersdata');

/* GET vaersdata. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await vaersdata.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

module.exports = router;