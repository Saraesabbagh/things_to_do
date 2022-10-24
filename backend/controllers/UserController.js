const User = require("../models/users");

exports.getDetails = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send({ message: err }));
};

exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nousersfound: "No Users found" }));
};

exports.createUser = (req, res) => {
  User.create(req.body)
    .then((user) => res.json({ msg: "User added successfully" }))
    .catch((err) =>
      res.status(400).json({
        error: "Unable to add this user",
        message: err,
      })
    );
};
