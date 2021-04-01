module.exports = app => {
  const vaersdatas = require("../controllers/vaersdata.controller.js");
  const vaerssymptoms = require("../controllers/vaerssymptoms.controller.js");

  //routes VAERSDATA
  // Create a new entry
  app.post("/vaersdata", vaersdatas.create);

  // Retrieve all entry
  app.get("/vaersdata", vaersdatas.findAll);

  // Retrieve a single entry with VAERS_ID
  app.get("/vaersdata/:VAERS_ID", vaersdatas.findOne);

  // Update a entry with VAERS_ID
  app.put("/vaersdata/:VAERS_ID", vaersdatas.update);

  // Delete a entry with VAERS_ID
  app.delete("/vaersdata/:VAERS_ID", vaersdatas.delete);

  // Create a new entry
  app.delete("/vaersdata", vaersdatas.deleteAll);

  //routes VAERSSYMPTOMS
  // Create a new entry
  app.post("/vaerssymptoms", vaerssymptoms.create);

  // Retrieve all entry
  app.get("/vaerssymptoms", vaerssymptoms.findAll);

  // Retrieve a single entry with SYMPTOM_ID
  app.get("/vaerssymptoms/:SYMPTOM_ID", vaerssymptoms.findOne);

  // Update a entry with SYMPTOM_ID
  app.put("/vaerssymptoms/:SYMPTOM_ID", vaerssymptoms.update);

  // Delete a entry with VAERS_ID
  app.delete("/vaerssymptoms/:SYMPTOM_ID", vaerssymptoms.delete);

  // Create a new entry
  app.delete("/vaerssymptoms", vaerssymptoms.deleteAll);
};
