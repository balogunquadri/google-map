const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    Log: { type: String, required: true },
    Lat: { type: Number, required: true },
    Address: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
