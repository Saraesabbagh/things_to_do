const express = require('express');
const router = express.Router();

const Todos= require('../../models/Todos');

// @route GET api/todos/test
// @description tests todos route
// @access Public
router.get('/test', (req, res) => res.send('todo route testing!'));

// @route GET api/todos
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Todos.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(404).json({ notodosfound: 'No todos found' }));
});

// @route GET api/todo/:id
// @description Get single todo by id
// @access Public
router.get('/:id', (req, res) => {
  Todos.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(404).json({ notodosfound: 'No todo found' }));
});

// @route GET api/todos
// @description add/save todo
// @access Public
router.post('/', (req, res) => {
  Todo.create(req.body)
    .then(todo => res.json({ msg: 'Todo added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this todo' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(todo => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/todo/:id
// @description Delete todo by id
// @access Public
router.delete('/:id', (req, res) => {
  Todo.findByIdAndRemove(req.params.id, req.body)
    .then(todo => res.json({ mgs: 'Todo entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a todo' }));
});

module.exports = router;