const db = require("../config/db");

// Get Salutations
const getSalutations = async (req, res) => {
  try {
    const [result] = await db.execute("SELECT * FROM salutation");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Genders
const getGenders = async (req, res) => {
  try {
    const [result] = await db.execute("SELECT * FROM gender");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMaritalStatuses = async (req, res) => {
  try {
    const [result] = await db.execute("SELECT * FROM maritalstatus");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getSalutations, getGenders, getMaritalStatuses };
