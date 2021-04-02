const Vaersall = require("../models/vaersall.model.js");

// Create and Save a new entry
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const vaersall = new Vaersall({
    VAERS_ID: req.body.VAERS_ID,
    RECVDATE: req.body.RECVDATE,
    STATE: req.body.STATE,
    AGE_YRS: req.body.AGE_YRS,
    CAGE_YRS: req.body.CAGE_YRS,
    CAGE_MO: req.body.CAGE_MO,
    SEX: req.body.SEX,
    RPT_DATE: req.body.RPT_DATE,
    SYMPTOM_TEXT: req.body.SYMPTOM_TEXT,
    DIED: req.body.DIED,
    L_THREAT: req.body.L_THREAT,
    ER_VISIT: req.body.ER_VISIT,
    HOSPITAL: req.body.HOSPITAL,
    HOSPDAYS: req.body.HOSPDAYS,
    X_STAY: req.body.X_STAY,
    DISABLE: req.body.DISABLE,
    RECOVD: req.body.RECOVD,
    VAX_DATE: req.body.VAX_DATE,
    ONSET_DATE: req.body.ONSET_DATE,
    NUMDAYS: req.body.NUMDAYS,
    LAB_DATE: req.body.LAB_DATE,
    V_ADMINBY: req.body.V_ADMINBY,
    V_FUNDBY: req.body.V_FUNDBY,
    OTHER_MEDS: req.body.OTHER_MEDS,
    CURR_ILL: req.body.CURR_ILL,
    HISTORY: req.body.HISTORY,
    PRIOR_VAX: req.body.PRIOR_VAX,
    SPLTTYPE: req.body.SPLTTYPE,
    FORM_VERS: req.body.FORM_VERS,
    TODAYS_DATE: req.body.TODAYS_DATE,
    BIRTH_DEFECT: req.body.BIRTH_DEFECT,
    OFC_VISIT: req.body.OFC_VISIT,
    ER_ED_VISIT: req.body.ER_ED_VISIT,
    ALLERGIES: req.body.ALLERGIES,
    VAERS_ID: req.body.VAERS_ID,
    SYMPTOM: req.body.SYMPTOM,
    SYMPTOMVERSION: req.body.SYMPTOMVERSION,
    VAX_TYPE: req.body.VAX_TYPE,
    VAERS_ID: req.body.VAERS_ID,
    VAX_LOT: req.body.VAX_LOT,
    VAX_DOSE_SERIES: req.body.VAX_DOSE_SERIES,
    VAX_ROUTE: req.body.VAX_ROUTE,
    VAX_SITE: req.body.VAX_SITE,
    VAX_DOSE_SERIES: req.body.VAX_DOSE_SERIES,
    VAX_NAME: req.body.VAX_NAME,
    VAX_MANU: req.body.VAX_MANU

  });

  // Save entry in the database
  Vaersall.create(vaersall, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the entry."
      });
    else res.send(data);
  });
};

// Retrieve all entries from the database.
exports.findAll = (req, res) => {
  Vaersall.getAll(req.query.page, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving entries."
      });
    else res.send(data);
  });
};

// Find a single entry with a VAERS_ID
exports.findOne = (req, res) => {
  Vaersall.findById(req.params.VAERS_ID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found entry with id ${req.params.VAERS_ID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving entry with id " + req.params.VAERS_ID
        });
      }
    } else res.send(data);
  });
};

// Delete a entry with the specified VAERS_ID in the request
exports.delete = (req, res) => {
  Vaersall.remove(req.params.VAERS_ID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found entry with id ${req.params.VAERS_ID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete entry with id " + req.params.VAERS_ID
        });
      }
    } else res.send({ message: `entry was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Vaersall.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all entries."
      });
    else res.send({ message: `All entries were deleted successfully!` });
  });
};
