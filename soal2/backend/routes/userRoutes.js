const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/login", userController.login);
router.post("/addUser", userController.addUser);
router.post("/updateUser", userController.updateUser);
router.get("/deleteUser/:id", userController.deleteUser);
router.get("/getUsers", userController.getUsers);

module.exports = router;
