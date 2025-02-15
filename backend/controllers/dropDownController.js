const db = require("../config/db");


const getSalutations = async (req, res,db) => {
  try {
    const [result] = await db.execute("SELECT * FROM salutation order by id");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getGenders = async (req, res,db) => {
  try {
    const [result] = await db.execute("SELECT * FROM gender order by id");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMaritalStatuses = async (req, res,db) => {
  try {
    const [result] = await db.execute("SELECT * FROM maritalstatus order by id");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getReligion = async (req, res,db) => {
  try {
    const [result] = await db.execute("SELECT * FROM religion order by id");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBloodGroup = async (req, res,db) => {
  try {
    const [result] = await db.execute("SELECT * FROM bloodgroup order by id");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDesignation = async (req, res,db) => {
  try {
    const [result] = await db.execute("SELECT * FROM designation order by id");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getSalutations, getGenders, getMaritalStatuses,getReligion,getBloodGroup,getDesignation};
