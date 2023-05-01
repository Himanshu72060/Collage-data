// Require express
const express = require("express");

const router = express.Router();

const Students = require("../Module/Students");
const Teachers = require("../Module/Teachers");

router.post("/Students", Students);
router.post("/Teachers", Teachers);


module.exports = router;
