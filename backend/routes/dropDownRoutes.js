const express = require("express");
const router = express.Router();
const { getSalutations, getGenders, getMaritalStatuses } = require("../controllers/dropDownController");

router.get("/salutations", getSalutations);
router.get("/genders", getGenders);
router.get("/marital-statuses", getMaritalStatuses);

module.exports = router;
