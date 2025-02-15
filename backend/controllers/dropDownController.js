const db = require("../config/db");


const getSalutations = async (req, res,db) => {
  try {
    const [result] = await db.execute("SELECT * FROM salutation");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getGenders = async (req, res,db) => {
  try {
    const [result] = await db.execute("SELECT * FROM gender");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMaritalStatuses = async (req, res,db) => {
  try {
    const [result] = await db.execute("SELECT * FROM maritalstatus");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getSalutations, getGenders, getMaritalStatuses };
