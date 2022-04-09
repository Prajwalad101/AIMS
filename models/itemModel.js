import mongoose from "mongoose";

import { productSchema } from "./productModel";

const itemSchema = new mongoose.Schema({
  item: {
    type: productSchema,
    required: [true, "An item must have a product"],
  },
  numItems: {
    type: Number,
    required: [true, "An item must have a number"],
    min: 1,
    max: 50000,
  },
  unit: {
    type: String,
    required: [true, "An item must have a unit"],
    lowercase: true,
    enum: ["kilogram", "gram", "litre", "piece"],
  },
});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
