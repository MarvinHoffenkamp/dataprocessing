module.exports = app => {
  const vaersdatas = require("../controllers/vaersdata.controller.js");
  const vaerssymptoms = require("../controllers/vaerssymptoms.controller.js");
  const vaersvax = require("../controllers/vaersvax.controller.js");
  const vaersall = require("../controllers/vaersall.controller.js");

  const cors = require('cors');

  //routes VAERSDATA
  // Create a new entry
  app.post("/vaersdata", cors(), vaersdatas.create);

  // Retrieve all entry
  app.get("/vaersdata", cors(), vaersdatas.findAll);

  // Retrieve a single entry with VAERS_ID
  app.get("/vaersdata/:VAERS_ID", cors(), vaersdatas.findOne);

  // Update a entry with VAERS_ID
  app.put("/vaersdata/:VAERS_ID", cors(), vaersdatas.update);

  // Delete a entry with VAERS_ID
  app.delete("/vaersdata/:VAERS_ID", cors(), vaersdatas.delete);

  // Create a new entry
  app.delete("/vaersdata", cors(), vaersdatas.deleteAll);

  //routes VAERSSYMPTOMS
  // Create a new entry
  app.post("/vaerssymptoms", vaerssymptoms.create);

  // Retrieve all entry
  app.get("/vaerssymptoms", vaerssymptoms.findAll);

  // Retrieve a single entry with SYMPTOM_ID
  app.get("/vaerssymptoms/:SYMPTOM_ID", vaerssymptoms.findOne);

  // Update a entry with SYMPTOM_ID
  app.put("/vaerssymptoms/:SYMPTOM_ID", vaerssymptoms.update);

  // Delete a entry with SYMPTOM_ID
  app.delete("/vaerssymptoms/:SYMPTOM_ID", vaerssymptoms.delete);

  // Create a new entry
  app.delete("/vaerssymptoms", vaerssymptoms.deleteAll);
  
  //routes VAERSVAX
  // Create a new entry
  app.post("/vaersvax", vaersvax.create);

  // Retrieve all entry
  app.get("/vaersvax", vaersvax.findAll);

  // Retrieve a single entry with VAX_ID
  app.get("/vaersvax/:VAX_ID", vaersvax.findOne);

  // Update a entry with VAX_ID
  app.put("/vaersvax/:VAX_ID", vaersvax.update);

  // Delete a entry with VAX_ID
  app.delete("/vaersvax/:VAX_ID", vaersvax.delete);

  // Create a new entry
  app.delete("/vaersvax", vaersvax.deleteAll);

  //routes VAERSALL
  // Retrieve all entry
  app.get("/vaersall", vaersall.findAll);

  // Retrieve a single entry with VAERS_ID
  app.get("/vaersall/:VAERS_ID", vaersall.findOne);

  // Delete a entry with VAERS_ID
  app.delete("/vaersall/:VAERS_ID", vaersall.delete);

  // Create a new entry
  app.delete("/vaersall", vaersall.deleteAll);
};
