const { Router } = require("express");
const { election } = require("../controller/election.controller");

module.exports = (app) => {
  // Define your API routes here

  // Example:
  // GET /api/example
  // GET /api/example/:id
  // POST /api/example
  // PUT /api/example/:id
  // DELETE /api/example/:id

  let router = Router();

  router.get("/elections", election.findAll);
  router.get("/elections/:id", election.findOne);
  router.post("/elections", election.create);
  router.put("/elections/:id", election.update);
  router.delete("/elections/:id", election.delete);
  app.use("/api", router);
};
