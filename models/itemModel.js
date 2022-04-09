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
  addedBy: {
    type: Object,
    required: [true, "An item must have a submitter"],
  },
});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
