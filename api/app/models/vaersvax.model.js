const sql = require("./db.js");

const Vaersvax = function(vaersvax) {
  this.VAX_TYPE = vaersvax.VAX_TYPE,
  this.VAERS_ID = vaersvax.VAERS_ID,
  this.VAX_LOT = vaersvax.VAX_LOT,
  this.VAX_DOSE_SERIES = vaersvax.VAX_DOSE_SERIES,
  this.VAX_ROUTE = vaersvax.VAX_ROUTE,
  this.VAX_SITE = vaersvax.VAX_SITE,
  this.VAX_DOSE_SERIES = vaersvax.VAX_DOSE_SERIES,
  this.VAX_NAME = vaersvax.VAX_NAME,
  this.VAX_MANU = vaersvax.VAX_MANU
}
Vaersvax.create = (newVaersvax, result) => {
  sql.query("INSERT INTO 2021vaersvax SET ?", newVaersvax, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created vaersvax entry: ", { ...newVaersvax });
    result(null, { ...newVaersvax });
  });
};

Vaersvax.findById = (VAX_ID, result) => {
  sql.query(`SELECT * FROM 2021vaersvax WHERE VAX_ID = ${VAX_ID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found entry: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found entry with the id
    result({ kind: "not_found" }, null);
  });
};

Vaersvax.getAll = result => {
  sql.query("SELECT * FROM 2021vaersvax", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("entry: ", res);
    result(null, res);
  });
};

Vaersvax.updateById = (VAX_ID, vaersvax, result) => {
  sql.query(
    "UPDATE 2021vaersvax SET VAERS_ID=? ,VAX_TYPE=? ,VAX_MANU=? ,VAX_LOT=? ,VAX_DOSE_SERIES=? ,VAX_ROUTE=? ,VAX_SITE=? ,VAX_NAME WHERE VAX_ID=?",
    [vaersvax.VAERS_ID, vaersvax.VAX_TYPE, vaersvax.VAX_MANU, vaersvax.VAX_LOT, vaersvax.VAX_DOSE_SERIES, vaersvax.VAX_ROUTE, vaersvax.VAX_SITE, vaersvax.VAX_NAME, VAX_ID],
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

      console.log("updated entry: ", { VAX_ID: VAX_ID, ...vaersvax });
      result(null, { VAX_ID: VAX_ID, ...vaersvax });
    }
  );
};

Vaersvax.remove = (VAX_ID, result) => {
  sql.query("DELETE FROM 2021vaersvax WHERE VAX_ID = ?", VAX_ID, (err, res) => {
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

Vaersvax.removeAll = result => {
  sql.query("DELETE FROM 2021vaersvax", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} entries`);
    result(null, res);
  });
};

module.exports = Vaersvax;
