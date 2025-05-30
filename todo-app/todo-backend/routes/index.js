const express = require('express');
const router = express.Router();
const redis = require('../redis')
const configs = require('../util/config')
const { getAsync } = require('../redis/index');

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics data. */
router.get('/statistics', async (_, res) => {
  const added_todos = parseInt(await getAsync('added_todos')) || 0;
  res.json({added_todos})
});

module.exports = router;
