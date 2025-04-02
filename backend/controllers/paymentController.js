import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

// @desc    Process checkout and create an order
// @route   POST /api/orders/checkout
// @access  Private
export const checkout = asyncHandler(async (req, res) => {
  const { user, cartItems, totalPrice, deliveryMethod } = req.body;

  if (!user || !cartItems || cartItems.length === 0 || !totalPrice || !deliveryMethod) {
    res.status(400);
    throw new Error("Missing required order details");
  }

  const newOrder = await Order.create({
    user,
    cartItems,
    totalPrice,
    deliveryMethod,
  });

  res.status(201).json({
    message: "Payment made successfully",
    order: newOrder,
  });
});

