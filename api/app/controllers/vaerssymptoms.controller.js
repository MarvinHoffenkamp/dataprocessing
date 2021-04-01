const Vaerssymptoms = require("../models/vaerssymptoms.model.js");

// Create and Save a new entry
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const vaerssymptoms = new Vaerssymptoms({
    VAERS_ID: req.body.VAERS_ID,
    SYMPTOM: req.body.SYMPTOM,
    SYMPTOMVERSION: req.body.SYMPTOMVERSION
  });

  // Save entry in the database
  Vaerssymptoms.create(vaerssymptoms, (err, data) => {
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
  Vaerssymptoms.getAll((err, data) => {
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
  Vaerssymptoms.findById(req.params.SYMPTOM_ID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found entry with id ${req.params.SYMPTOM_ID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving entry with id " + req.params.SYMPTOM_ID
        });
      }
    } else res.send(data);
  });
};

// Update a entry identified by the SYMPTOM_ID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Vaerssymptoms.updateById(
    req.params.SYMPTOM_ID,
    new Vaerssymptoms(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found entry with id ${req.params.SYMPTOM_ID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating entry with id " + req.params.SYMPTOM_ID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a entry with the specified VAERS_ID in the request
exports.delete = (req, res) => {
  Vaerssymptoms.remove(req.params.SYMPTOM_ID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found entry with id ${req.params.SYMPTOM_ID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete entry with id " + req.params.SYMPTOM_ID
        });
      }
    } else res.send({ message: `entry was deleted successfully!` });
  });
};

// Delete all entries from the database.
exports.deleteAll = (req, res) => {
  Vaerssymptoms.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all entries."
      });
    else res.send({ message: `All entries were deleted successfully!` });
  });
};
