const model = require("../model/index");
const Contestant = model.contestant;
const contestant = {};

contestant.create = (req, res) => {
  if (!req.body.name) {
    res.status(200).send({ message: "firstname is required." });
    return;
  }

  const contestant = {
    name: req.body.firstname,
  };

  Contestant.create(contestant)
    .then((contestant) => {
      res.json(contestant);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not create contestant." });
    });
};

contestant.findAll = (req, res) => {
  Contestant.findAll()
    .then((contestants) => {
      res.json(contestants);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not find contestants." });
    });
};

contestant.findOne = (req, res) => {
  Contestant.findByPk(req.params.id)
    .then((contestant) => {
      res.json(contestant);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not find contestant." });
    });
};

contestant.update = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Firstname is required." });
    return;
  }


  const contestant = {
    name: req.body.name,
  };

  Contestant.update(contestant, { where: { id: req.params.id } })
    .then((contestant) => {
      if (contestant == 1) {
        res.send({ message: "Contestant updated successfully." });
      } else {
        res.status(500).send({ message: "Could not update contestant." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not update contestant." });
    });
};

contestant.delete = (req, res) => {
  Contestant.destroy({ where: { id: req.params.id } })
    .then((contestant) => {
      res.send({ message: "Contestant deleted successfully." });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not delete contestant." });
    });
};

module.exports.contestant = contestant;
