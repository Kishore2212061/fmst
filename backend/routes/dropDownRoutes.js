const express = require("express");
const router = express.Router();
const { getSalutations, getGenders, getMaritalStatuses,getReligion,getBloodGroup,getDesignation} = require("../controllers/dropDownController");

function dropDownRoutes(db) {
  router.get("/salutations", (req, res) => getSalutations(req,res,db));
  router.get("/genders",(req, res) => getGenders(req,res,db));
  router.get("/marital-statuses", (req, res) =>getMaritalStatuses(req,res,db));
  router.get("/religion", (req, res) =>getReligion(req,res,db));
  router.get("/blood-groups", (req, res) =>getBloodGroup(req,res,db));
  router.get("/designation", (req, res) =>getDesignation(req,res,db));

  return router;
}

module.exports = dropDownRoutes;
