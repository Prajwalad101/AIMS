import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true,
    lowercase: true,
    maxlength: 20,
    minlength: 3,
  },
  type: {
    type: String,
    required: [true, "A product must have a type"],
    lowercase: true,
    maxlength: 15,
    minlength: 3,
  },
  province: {
    type: Number,
    required: [true, "A product must have a province"],
    min: 1,
    max: 7,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
