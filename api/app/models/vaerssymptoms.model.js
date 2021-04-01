const sql = require("./db.js");

const Vaerssymptoms = function(vaerssymptoms) {
  this.SYMPTOM_ID = vaerssymptoms.SYMPTOM_ID;
  this.VAERS_ID = vaerssymptoms.VAERS_ID;
  this.SYMPTOM = vaerssymptoms.SYMPTOM;
  this.SYMPTOMVERSION = vaerssymptoms.SYMPTOMVERSION;
  
}
Vaerssymptoms.create = (newVaerssymptoms, result) => {
  sql.query("INSERT INTO 2021vaerssymptoms SET ?", newVaerssymptoms, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created vaerssymptoms entry: ", { ...newVaerssymptoms });
    result(null, { ...newVaerssymptoms });
  });
};

Vaerssymptoms.findById = (VAERS_ID, result) => {
  sql.query(`SELECT * FROM 2021vaerssymptoms WHERE VAERS_ID = ${VAERS_ID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found entry: ", res);
      result(null, res);
      return;
    }

    // not found entry with the id
    result({ kind: "not_found" }, null);
  });
};

Vaerssymptoms.getAll = (page = 0, result) => {
  sql.query("SELECT * FROM 2021vaerssymptoms LIMIT 10 OFFSET " + (page * 10), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("entry: ", res);
    result(null, res);
  });
};

Vaerssymptoms.updateById = (SYMPTOM_ID, vaerssymptoms, result) => {
  sql.query(
    "UPDATE 2021vaerssymptoms SET SYMPTOM=?, SYMPTOMVERSION=? WHERE SYMPTOM_ID=?",
    [vaerssymptoms.SYMPTOM, vaerssymptoms.SYMPTOMVERSION, SYMPTOM_ID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found entry with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated entry: ", { SYMPTOM_ID: SYMPTOM_ID, ...vaerssymptoms });
      result(null, { VAERS_ID: VAERS_ID, ...vaerssymptoms });
    }
  );
};

Vaerssymptoms.remove = (SYMPTOM_ID, result) => {
  sql.query("DELETE FROM 2021vaerssymptoms WHERE SYMPTOM_ID = ?", SYMPTOM_ID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found entry with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted entry with id: ", id);
    result(null, res);
  });
};

Vaerssymptoms.removeAll = result => {
  sql.query("DELETE FROM 2021vaerssymptoms", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} entries`);
    result(null, res);
  });
};

module.exports = Vaerssymptoms;
