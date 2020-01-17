const express = require('express');

const router = express.Router();

const controller = require('../controllers/users.controller');

router.get('/', (req, res) => {
  res.json(controller.getAll());
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json(controller.getOne(id));
});

router.post('/', (req, res) => {
  const user = req.body;
  res.json(controller.create(user));
});

router.delete('/:id', (req, res) => {

});

module.exports = router;
