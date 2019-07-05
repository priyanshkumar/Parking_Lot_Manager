const db = require("../models");

module.exports = app => {
  app.post("/api/createCustomer", (req, res) => {
    console.log("Inside Create Customer post method");
    db.Customer.create(req.body).then(results => {
      res.json(results);
    });
  });
};
