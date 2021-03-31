const sql = require("./db.js");

const Vaersdata = function(vaersdata) {
  this.VAERS_ID = vaersdata.VAERS_ID;
  this.RECVDATE = vaersdata.RECVDATE;
  this.STATE = vaersdata.STATE;
  this.AGE_YRS = vaersdata.AGE_YRS;
  this.CAGE_YRS = vaersdata.CAGE_YRS;
  this.CAGE_MO = vaersdata.CAGE_MO;
  this.SEX = vaersdata.SEX;
  this.RPT_DATE = vaersdata.RPT_DATE;
  this.SYMPTOM_TEXT = vaersdata.SYMPTOM_TEXT;
  this.DIED = vaersdata.DIED;
  this.L_THREAT = vaersdata.L_THREAT;
  this.ER_VISIT = vaersdata.ER_VISIT;
  this.HOSPITAL = vaersdata.HOSPITAL;
  this.HOSPDAYS = vaersdata.HOSPDAYS;
  this.X_STAY = vaersdata.X_STAY;
  this.DISABLE = vaersdata.DISABLE;
  this.RECOVD = vaersdata.RECOVD;
  this.VAX_DATE = vaersdata.VAX_DATE;
  this.ONSET_DATE = vaersdata.ONSET_DATE;
  this.NUMDAYS = vaersdata.NUMDAYS;
  this.LAB_DATE = vaersdata.LAB_DATE;
  this.V_ADMINBY = vaersdata.V_ADMINBY;
  this.V_FUNDBY = vaersdata.V_FUNDBY;
  this.OTHER_MEDS = vaersdata.OTHER_MEDS;
  this.CURR_ILL = vaersdata.CURR_ILL;
  this.HISTORY = vaersdata.HISTORY;
  this.PRIOR_VAX = vaersdata.PRIOR_VAX;
  this.SPLTTYPE = vaersdata.SPLTTYPE;
  this.FORM_VERS = vaersdata.FORM_VERS;
  this.TODAYS_DATE = vaersdata.TODAYS_DATE;
  this.BIRTH_DEFECT = vaersdata.BIRTH_DEFECT;
  this.OFC_VISIT = vaersdata.OFC_VISIT;
  this.ER_ED_VISIT = vaersdata.ER_ED_VISIT;
  this.ALLERGIES = vaersdata.ALLERGIES;
}
Vaersdata.create = (newVaersdata, result) => {
  sql.query("INSERT INTO 2021vaersdata SET ?", newVaersdata, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created vaersdate entry: ", { ...newCustomer });
    result(null, { ...newCustomer });
  });
};

Vaersdata.findById = (VAERS_ID, result) => {
  sql.query(`SELECT * FROM 2021vaersdata WHERE VAERS_ID = ${VAERS_ID}`, (err, res) => {
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

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Vaersdata.getAll = result => {
  sql.query("SELECT * FROM 2021vaersdata", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("entry: ", res);
    result(null, res);
  });
};

Vaersdata.updateById = (VAERS_ID, vaersdata, result) => {
  sql.query(
    "UPDATE 2021vaersdata SET RECVDATE=?, STATE=?, AGE_YRS=?, CAGE_YR=?, CAGE_MO=?, SEX=?, RPT_DATE=?, SYMPTOM_TEXT=?, DIED=?, DATEDIED=?, L_THREAT=?, ER_VISIT=?, HOSPITAL=?, HOSPDAYS=?, X_STAY=?, DISABLE=?, RECOVD=?, VAX_DATE=?, ONSET_DATE=?, NUMDAYS=?, LAB_DATA=?, V_ADMINBY=?, V_FUNDBY=?, OTHER_MEDS=?, CUR_ILL=?, HISTORY=?, PRIOR_VAX=?, SPLTTYPE=?, FORM_VERS=?, TODAYS_DATE=?, BIRTH_DEFECT=?, OFC_VISIT=?, ER_ED_VISIT=?, ALLERGIES=? WHERE VAERS_ID=?",
    [vaersdata.RECVDATE, vaersdata.STATE, vaersdata.AGE_YRS, vaersdata.CAGE_YR, vaersdata.CAGE_MO, vaersdata.SEX, vaersdata.RPT_DATE, vaersdata.SYMPTOM_TEXT, vaersdata.DIED, vaersdata.DATEDIED, vaersdata.L_THREAT, vaersdata.ER_VISIT, vaersdata.HOSPITAL, vaersdata.HOSPDAYS, vaersdata.X_STAY, vaersdata.DISABLE, vaersdata.RECOVD, vaersdata.VAX_DATE, vaersdata.ONSET_DATE, vaersdata.NUMDAYS, vaersdata.LAB_DATA, vaersdata.V_ADMINBY, vaersdata.V_FUNDBY, vaersdata.OTHER_MEDS, vaersdata.CUR_ILL, vaersdata.HISTORY, vaersdata.PRIOR_VAX, vaersdata.SPLTTYPE, vaersdata.FORM_VERS, vaersdata.TODAYS_DATE, vaersdata.BIRTH_DEFECT, vaersdata.OFC_VISIT, vaersdata.ER_ED_VISIT, vaersdata.ALLERGIES, VAERS_ID],
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

      console.log("updated entry: ", { VAERS_ID: VAERS_ID, ...vaersdata });
      result(null, { VAERS_ID: VAERS_ID, ...vaersdata });
    }
  );
};

Vaersdata.remove = (VAERS_ID, result) => {
  sql.query("DELETE FROM 2021vaersdata WHERE VAERS_ID = ?", VAERS_ID, (err, res) => {
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

Vaersdata.removeAll = result => {
  sql.query("DELETE FROM 2021vaersdata", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} entries`);
    result(null, res);
  });
};

module.exports = Vaersdata;
