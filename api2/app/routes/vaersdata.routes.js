module.exports = app => {
  const vaersdatas = require("../controllers/vaersdata.controller.js");

  // Create a new Customer
  app.post("/vaersdata", vaersdatas.create);

  // Retrieve all Customers
  app.get("/vaersdata", vaersdatas.findAll);

  // Retrieve a single Customer with customerId
  app.get("/vaersdata/:VAERS_ID", vaersdatas.findOne);

  // Update a Customer with customerId
  app.put("/vaersdata/:VAERS_ID", vaersdatas.update);

  // Delete a Customer with customerId
  app.delete("/vaersdata/:VAERS_ID", vaersdatas.delete);

  // Create a new Customer
  app.delete("/vaersdata", vaersdatas.deleteAll);
};
