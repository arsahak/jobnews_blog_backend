const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
  topCategory: {
    type: String,
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  image: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
