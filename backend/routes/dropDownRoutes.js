const express = require("express");
const router = express.Router();
const { getSalutations, getGenders, getMaritalStatuses } = require("../controllers/dropDownController");

function dropDownRoutes(db) {
  router.get("/salutations", (req, res) => getSalutations(req,res,db));
  router.get("/genders",(req, res) => getGenders(req,res,db));
  router.get("/marital-statuses", (req, res) =>getMaritalStatuses(req,res,db));
  return router;
}

module.exports = dropDownRoutes;
