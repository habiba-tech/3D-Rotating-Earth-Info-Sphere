//routes /user.js
const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/userController");

router.get("/", ctrl.listUsers);
router.get("/:id", ctrl.getUserById);
router.post("/", ctrl.createUser);
router.put("/:id", ctrl.updateUser);
router.delete("/:id", ctrl.deleteUser);

module.exports = router;
