// utils
import dbConnect from "../../lib/dbConnect";
import AppError from "../../lib/appError";

// middlewares
import catchAsync from "../../middlewares/catchAsync";
import globalErrorHandler from "../../middlewares/errorMd";

// models
import Product from "../../models/productModel";

async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  if (method === "POST") {
    const product = await Product.create(req.body);

    return res.status(200).json({
      status: "success",
      data: product,
    });
  } else if (method === "GET") {
    const products = await Product.find({});

    return res.status(200).json({
      status: "success",
      data: products,
    });
  } else {
    const err = new AppError(`No route found for ${req.url}`, 404);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
