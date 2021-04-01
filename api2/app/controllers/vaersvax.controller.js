const Vaersvax = require("../models/vaersvax.model.js");

// Create and Save a new entry
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const vaersvax = new Vaersvax({
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
  Vaersvax.create(vaersvax, (err, data) => {
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
  Vaersvax.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving entries."
      });
    else res.send(data);
  });
};

// Find a single entry with a VAX_ID
exports.findOne = (req, res) => {
  Vaersvax.findById(req.params.VAX_ID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found entry with id ${req.params.VAX_ID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving entry with id " + req.params.VAX_ID
        });
      }
    } else res.send(data);
  });
};

// Update a entry identified by the VAX_ID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Vaersvax.updateById(
    req.params.VAX_ID,
    new Vaersvax(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found entry with id ${req.params.VAX_ID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating entry with id " + req.params.VAX_ID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a entry with the specified VAX_ID in the request
exports.delete = (req, res) => {
  Vaersvax.remove(req.params.VAX_ID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found entry with id ${req.params.VAX_ID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete entry with id " + req.params.VAX_ID
        });
      }
    } else res.send({ message: `entry was deleted successfully!` });
  });
};

// Delete all entries from the database.
exports.deleteAll = (req, res) => {
  Vaersvax.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all entries."
      });
    else res.send({ message: `All entries were deleted successfully!` });
  });
};
