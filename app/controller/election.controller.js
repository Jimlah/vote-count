const model = require("../model/index");
const Election = model.election;
const election = {};

election.create = (req, res) => {
  if (!req.body.title) {
    res.status(200).send({ message: "Title is required." });
    return;
  }

  if (!req.body.election_date) {
    res.status(200).send({ message: "Election date is required." });
    return;
  }

  const election = {
    title: req.body.title,
    description: req.body.description,
    election_date: req.body.election_date,
  };

  Election.create(election)
    .then((election) => {
      // req.body.contestant.forEach((cont) => {
      //   let input = {
      //     election_id: election.id,
      //     name: cont,
      //   };

      //   model.contestant.create(input).then((contestant) => {
      //     console.log("contestant created Successfully");
      //   });
      // });
      res.json(election);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not create election." });
    });
};

election.findAll = (req, res) => {
  Election.findAll()
    .then((elections) => {
      res.json(elections);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not find elections." });
    });
};

election.findOne = (req, res) => {
  Election.findByPk(req.params.id)
    .then((election) => {
      res.json(election);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not find election." });
    });
};

election.update = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Title is required." });
    return;
  }
  if (!req.body.election_date) {
    res.status(400).send({ message: "Election date is required." });
    return;
  }

  const election = {
    title: req.body.title,
    description: req.body.description,
    election_date: req.body.election_date,
  };

  Election.update(election, { where: { id: req.params.id } })
    .then((election) => {
      if (election == 1) {
        res.send({ message: "Election updated successfully." });
      } else {
        res.status(500).send({ message: "Could not update election." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not update election." });
    });
};

election.delete = (req, res) => {
  Election.destroy({ where: { id: req.params.id } })
    .then((election) => {
      res.send({ message: "Election deleted successfully." });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Could not delete election." });
    });
};

module.exports.election = election;
