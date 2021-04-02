const sql = require("./db.js");

const Vaersall = function(vaersall) {
  this.VAERS_ID = vaersall.VAERS_ID;
  this.RECVDATE = vaersall.RECVDATE;
  this.STATE = vaersall.STATE;
  this.AGE_YRS = vaersall.AGE_YRS;
  this.CAGE_YRS = vaersall.CAGE_YRS;
  this.CAGE_MO = vaersall.CAGE_MO;
  this.SEX = vaersall.SEX;
  this.RPT_DATE = vaersall.RPT_DATE;
  this.SYMPTOM_TEXT = vaersall.SYMPTOM_TEXT;
  this.DIED = vaersall.DIED;
  this.L_THREAT = vaersall.L_THREAT;
  this.ER_VISIT = vaersall.ER_VISIT;
  this.HOSPITAL = vaersall.HOSPITAL;
  this.HOSPDAYS = vaersall.HOSPDAYS;
  this.X_STAY = vaersall.X_STAY;
  this.DISABLE = vaersall.DISABLE;
  this.RECOVD = vaersall.RECOVD;
  this.VAX_DATE = vaersall.VAX_DATE;
  this.ONSET_DATE = vaersall.ONSET_DATE;
  this.NUMDAYS = vaersall.NUMDAYS;
  this.LAB_DATE = vaersall.LAB_DATE;
  this.V_ADMINBY = vaersall.V_ADMINBY;
  this.V_FUNDBY = vaersall.V_FUNDBY;
  this.OTHER_MEDS = vaersall.OTHER_MEDS;
  this.CURR_ILL = vaersall.CURR_ILL;
  this.HISTORY = vaersall.HISTORY;
  this.PRIOR_VAX = vaersall.PRIOR_VAX;
  this.SPLTTYPE = vaersall.SPLTTYPE;
  this.FORM_VERS = vaersall.FORM_VERS;
  this.TODAYS_DATE = vaersall.TODAYS_DATE;
  this.BIRTH_DEFECT = vaersall.BIRTH_DEFECT;
  this.OFC_VISIT = vaersall.OFC_VISIT;
  this.ER_ED_VISIT = vaersall.ER_ED_VISIT;
  this.ALLERGIES = vaersall.ALLERGIES;
  this.SYMPTOM_ID = vaersall.SYMPTOM_ID;
  this.VAERS_ID = vaersall.VAERS_ID;
  this.SYMPTOM = vaersall.SYMPTOM;
  this.SYMPTOMVERSION = vaersall.SYMPTOMVERSION;
  this.VAX_TYPE = vaersall.VAX_TYPE,
  this.VAERS_ID = vaersall.VAERS_ID,
  this.VAX_LOT = vaersall.VAX_LOT,
  this.VAX_DOSE_SERIES = vaersall.VAX_DOSE_SERIES,
  this.VAX_ROUTE = vaersall.VAX_ROUTE,
  this.VAX_SITE = vaersall.VAX_SITE,
  this.VAX_DOSE_SERIES = vaersall.VAX_DOSE_SERIES,
  this.VAX_NAME = vaersall.VAX_NAME,
  this.VAX_MANU = vaersall.VAX_MANU
}

Vaersall.findById = (VAERS_ID, result) => {
  sql.query(`SELECT * from 2021vaersdata join 2021vaerssymptoms on 2021vaersdata.VAERS_ID = 2021vaerssymptoms.VAERS_ID join 2021vaersvax on 2021vaersvax.VAERS_ID = 2021vaersdata.VAERS_ID WHERE 2021vaersdata.VAERS_ID = ${VAERS_ID}`, (err, res) => {
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

Vaersall.getAll = (page = 0, result) => {
  sql.query("SELECT * from 2021vaersdata join 2021vaerssymptoms on 2021vaersdata.VAERS_ID = 2021vaerssymptoms.VAERS_ID join 2021vaersvax on 2021vaersvax.VAERS_ID = 2021vaersdata.VAERS_ID LIMIT 10 OFFSET " + (page * 10)  ,
   (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("entry: ", res);
    result(null, res);
  });
};

Vaersall.remove = (VAERS_ID, result) => {
  sql.query("DELETE * from 2021vaersdata join 2021vaerssymptoms on 2021vaersdata.VAERS_ID = 2021vaerssymptoms.VAERS_ID join 2021vaersvax on 2021vaersvax.VAERS_ID = 2021vaersdata.VAERS_ID WHERE VAERS_ID = ?", VAERS_ID, (err, res) => {
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

Vaersall.removeAll = result => {
  sql.query("DELETE * from 2021vaersdata join 2021vaerssymptoms on 2021vaersdata.VAERS_ID = 2021vaerssymptoms.VAERS_ID join 2021vaersvax on 2021vaersvax.VAERS_ID = 2021vaersdata.VAERS_ID", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} entries`);
    result(null, res);
  });
};

module.exports = Vaersall;
