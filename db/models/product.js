const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "kitchen-cabinets",
  },
  modelNumber: {
    type: String,
    required: true,
  },
  productImages: {
    type: Array,
    required: true,
    default: [],
  },
  description: {
    type: String,
  },
  assemblyInstructions: {
    type: Array,
    default: [],
  },
  downloadInformation: {
    type: Array,
    default: [],
  },
  color: {
    type: String,
  },
  doorStyle: {
    type: String,
  },
  constructionType: {
    type: String,
  },
  features: {
    type: String,
  },
  cabinetStyle: {
    type: String,
  },
  collections: {
    type: Array,
    default: [],
  },
});

mongoose.models = {};
module.exports =
  mongoose.models.admins || mongoose.model("products", productSchema);
