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

/* GET vaersdata. */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await vaersdata.getSingle(req.params.id));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

/* POST VAERSDATA */
router.post('/', async function(req, res, next) {
  try {
    res.json(await vaersdata.create(req.body));
  } catch (err) {
    console.error(`Error while creating vaers entry`, err.message);
    next(err);
  }
});

/* PUT VAERSDATA */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await vaersdata.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating vaers entry`, err.message);
    next(err);
  }
});

/* DELETE VEARS entry */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await vaersdata.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting vaers entry`, err.message);
    next(err);
  }
});

module.exports = router;