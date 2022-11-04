const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/UserController");
const { signup, signin } = require("../../controllers/auth");
// @route GET api/users/test
// @description tests users route
// @access Public
router.get("/test", (req, res) => res.send("users route testing!"));

router.get("/", UserController.getAllUsers);

router.get("/:id", UserController.getDetails);

router.post("/new", UserController.createUser);

router.post('/signup', signup);

router.post('/signin', signin);





module.exports = router;