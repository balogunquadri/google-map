const router = require("express").Router();
let Restaurant = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Restaurant.find()
    .then(exercises => res.json(restaurants))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const log = req.body.log;
  const lat = req.body.lat;
  const Address = req.body.Address;

  const newRestaurant = new Restaurant({
    name,
    log,
    lat,
    Address
  });

  newRestaurant
    .save()
    .then(() => res.json("Restaurant added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Restaurant.findById(req.params.id)
    .then(exercise => res.json(restaurant))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Restaurant.findByIdAndDelete(req.params.id)
    .then(() => res.json("Restaurant deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Restaurant.findById(req.params.id)
    .then(exercise => {
      restaurant.name = req.body.username;
      restaurant.log = req.body.description;
      restaurant.lat = req.body.lat;
      restaurant.Address = req.body.Address;

      restaurant
        .save()
        .then(() => res.json("Restaurant updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
