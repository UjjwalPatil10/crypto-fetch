const mongoose = require("mongoose");

const detailsModel = new mongoose.Schema({
  name: {
    type: String,
  },
  base_unit: {
    type: String,
  },
  last: {
    type: Number,
  },
  buy: {
    type: Number,
  },
  sell: {
    type: Number,
  },
  volume: {
    type: Number,
  },
});

module.exports = mongoose.model("fetchData", detailsModel);
