const express = require("express");
const router = express.Router();
const {
  getSalutations,
  getGenders,
  getMaritalStatuses,
  getReligion,
  getBloodGroup,
  getDesignation,
  getStates,
  getDistricts,
  getTaluks,
  getCommunity,
  getAccountTypes,
  getEmploymentType,
  getFacultyDetails,
  createRelationship,
  getRelationshipsByUserId,
  updateRelationship,
  deleteRelationship,
  uploadProfilePicture,
  getProfilePicture,
  saveLocalStorageData,
  getLocalStorageData,
} = require("../controllers/dropDownController");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ limits: { fileSize: 2 * 1024 * 1024 } }); // 2MB limit

function dropDownRoutes(db) {
  router.get("/salutations", (req, res) => getSalutations(req, res, db));
  router.get("/genders", (req, res) => getGenders(req, res, db));
  router.get("/marital-statuses", (req, res) =>
    getMaritalStatuses(req, res, db)
  );
  router.get("/religion", (req, res) => getReligion(req, res, db));
  router.get("/community", (req, res) => getCommunity(req, res, db));
  router.get("/blood-groups", (req, res) => getBloodGroup(req, res, db));
  router.get("/designation", (req, res) => getDesignation(req, res, db));
  router.get("/states", (req, res) => getStates(req, res, db));
  router.get("/districts/:stateId", (req, res) => getDistricts(req, res, db));
  router.get("/taluks/:districtId", (req, res) => getTaluks(req, res, db));
  router.get("/account-types", (req, res) => getAccountTypes(req, res, db));
  router.get("/employment-types", (req, res) =>
    getEmploymentType(req, res, db)
  );
  router.get("/faculty-details/:userId", (req, res) =>
    getFacultyDetails(req, res, db)
  );
  router.post("/relationships", (req, res) => createRelationship(req, res, db));
  router.get("/relationships/:userId", (req, res) =>
    getRelationshipsByUserId(req, res, db)
  );
  router.put("/relationships/:id", (req, res) =>
    updateRelationship(req, res, db)
  );
  router.delete("/relationships/:id", (req, res) =>
    deleteRelationship(req, res, db)
  );
  router.post("/upload/:userId", upload.single("image"), (req, res) =>
    uploadProfilePicture(req, res, db)
  );
  router.get("/user/:userId/image", (req, res) =>
    getProfilePicture(req, res, db)
  );
  router.post("/saveLocalStorage", (req, res) =>
    saveLocalStorageData(req, res, db)
  );
  router.get("/getLocalStorage/:userId", (req, res) =>
    getLocalStorageData(req, res, db)
  );
  return router;
}

module.exports = dropDownRoutes;
