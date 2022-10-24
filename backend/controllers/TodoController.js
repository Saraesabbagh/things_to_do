const Todo = require("../models/todos");

exports.getAllTodos = (req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(404).json({ notodosfound: 'No todos found' }));
};

exports.getTodoDetails= (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(404).json({ notodosfound: 'No todo found' }));
};

exports.createTodo=(req, res) => {
  Todo.create(req.body)
    .then(todo => res.json({ 
      msg: 'Todo added successfully', 
      obj: todo
    }))
    .catch(err => res.status(400).json({ 
      errorMessage: 'Unable to add this todo',
      actualError: err
    }));
};