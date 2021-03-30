const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  console.log("offset = " + offset)
  console.log("listperpage = " + config.listPerPage)
  const rows = await db.query(
    `SELECT VAERS_ID, RECVDATE, STATE, AGE_YRS, SEX, SYMPTOM_TEXT 
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

module.exports = {
  getMultiple
}