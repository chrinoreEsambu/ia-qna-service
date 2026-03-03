const openIaCtrl = require("../Controllers/openIa.controller");
const express = require("express");
const router = express.Router();

router.post("/ask", openIaCtrl.fetchCall);
module.exports = router;
