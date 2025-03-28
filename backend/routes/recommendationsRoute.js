const express = require("express");

const {getRecommendation} = require("../controllers/recommendation");

const router = express.Router();

router.post("/recommendation", getRecommendation);

module.exports = router;