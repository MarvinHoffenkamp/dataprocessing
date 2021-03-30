const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getSingle(id){
  const rows = await db.query(
    `SELECT * 
    FROM 2021vaersdata WHERE VAERS_ID=?`,
    [id]
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  console.log("offset = " + offset)
  console.log("listperpage = " + config.listPerPage)
  const rows = await db.query(
    `SELECT * 
    FROM 2021vaersdata LIMIT ? OFFSET ?`,
    [config.listPerPage, offset]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(vaersdata){
  const result = await db.query(
    `INSERT INTO 2021vaersdata 
    (VAERS_ID, RECVDATE, STATE, AGE_YRS, CAGE_YR, CAGE_MO, SEX, RPT_DATE, SYMPTOM_TEXT, DIED, DATEDIED, L_THREAT, ER_VISIT, HOSPITAL, HOSPDAYS, X_STAY, DISABLE, RECOVD, VAX_DATE, ONSET_DATE, NUMDAYS, LAB_DATA, V_ADMINBY, V_FUNDBY, OTHER_MEDS, CUR_ILL, HISTORY, PRIOR_VAX, SPLTTYPE, FORM_VERS, TODAYS_DATE, BIRTH_DEFECT, OFC_VISIT, ER_ED_VISIT, ALLERGIES) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    [vaersdata.VAERS_ID, vaersdata.RECVDATE, vaersdata.STATE, vaersdata.AGE_YRS, vaersdata.CAGE_YR, vaersdata.CAGE_MO, vaersdata.SEX, vaersdata.RPT_DATE, vaersdata.SYMPTOM_TEXT, vaersdata.DIED, vaersdata.DATEDIED, vaersdata.L_THREAT, vaersdata.ER_VISIT, vaersdata.HOSPITAL, vaersdata.HOSPDAYS, vaersdata.X_STAY, vaersdata.DISABLE, vaersdata.RECOVD, vaersdata.VAX_DATE, vaersdata.ONSET_DATE, vaersdata.NUMDAYS, vaersdata.LAB_DATA, vaersdata.V_ADMINBY, vaersdata.V_FUNDBY, vaersdata.OTHER_MEDS, vaersdata.CUR_ILL, vaersdata.HISTORY, vaersdata.PRIOR_VAX, vaersdata.SPLTTYPE, vaersdata.FORM_VERS, vaersdata.TODAYS_DATE, vaersdata.BIRTH_DEFECT, vaersdata.OFC_VISIT, vaersdata.ER_ED_VISIT, vaersdata.ALLERGIES]
  );

  let message = 'Error in creating data entry';

  if (result.affectedRows) {
    message = 'VAERS entry created successfully';
  }

  return {message};
}

async function update(entryID, vaersdata){
  const result = await db.query(
    `UPDATE 2021vaersdata 
    SET RECVDATE=?, STATE=?, AGE_YRS=?, CAGE_YR=?, CAGE_MO=?, SEX=?, RPT_DATE=?, SYMPTOM_TEXT=?, DIED=?, DATEDIED=?, L_THREAT=?, ER_VISIT=?, HOSPITAL=?, HOSPDAYS=?, X_STAY=?, DISABLE=?, RECOVD=?, VAX_DATE=?, ONSET_DATE=?, NUMDAYS=?, LAB_DATA=?, V_ADMINBY=?, V_FUNDBY=?, OTHER_MEDS=?, CUR_ILL=?, HISTORY=?, PRIOR_VAX=?, SPLTTYPE=?, FORM_VERS=?, TODAYS_DATE=?, BIRTH_DEFECT=?, OFC_VISIT=?, ER_ED_VISIT=?, ALLERGIES=? 
    WHERE VAERS_ID=?`, 
    [vaersdata.RECVDATE, vaersdata.STATE, vaersdata.AGE_YRS, vaersdata.CAGE_YR, vaersdata.CAGE_MO, vaersdata.SEX, vaersdata.RPT_DATE, vaersdata.SYMPTOM_TEXT, vaersdata.DIED, vaersdata.DATEDIED, vaersdata.L_THREAT, vaersdata.ER_VISIT, vaersdata.HOSPITAL, vaersdata.HOSPDAYS, vaersdata.X_STAY, vaersdata.DISABLE, vaersdata.RECOVD, vaersdata.VAX_DATE, vaersdata.ONSET_DATE, vaersdata.NUMDAYS, vaersdata.LAB_DATA, vaersdata.V_ADMINBY, vaersdata.V_FUNDBY, vaersdata.OTHER_MEDS, vaersdata.CUR_ILL, vaersdata.HISTORY, vaersdata.PRIOR_VAX, vaersdata.SPLTTYPE, vaersdata.FORM_VERS, vaersdata.TODAYS_DATE, vaersdata.BIRTH_DEFECT, vaersdata.OFC_VISIT, vaersdata.ER_ED_VISIT, vaersdata.ALLERGIES, entryID]

  );

  let message = 'Error in updating VAERS entry';

  if (result.affectedRows) {
    message = 'VAERS entry updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM 2021vaersdata WHERE VAERS_ID=?`, 
    [id]
  );

  let message = 'Error in deleting VAERS entry';

  if (result.affectedRows) {
    message = 'VAERS entry deleted successfully';
  }

  return {message};
}

module.exports = {
  getSingle,
  getMultiple,
  create,
  update,
  remove
}