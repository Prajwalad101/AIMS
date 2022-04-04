// utils
import dbConnect from "../../../lib/dbConnect";
import AppError from "../../../lib/appError";

// middlewares
import catchAsync from "../../../middlewares/catchAsync";
import globalErrorHandler from "../../../middlewares/errorMd";

// models
import Product from "../../../models/productModel";

async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { productId } = req.query;

  if (method === "DELETE") {
    await Product.findByIdAndDelete(productId);
    return res.status(204);
  } else {
    const err = new AppError(`No route for ${req.url} found`, 404);
    globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
