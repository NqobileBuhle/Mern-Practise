import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc    Create a new order
// @route   POST /api/orders
// @access  Private
export const createOrder = asyncHandler(async (req, res) => {
  const { user, items, totalPrice, deliveryMethod } = req.body;

  if (!items || items.length === 0) {
    res.status(400);
    throw new Error("Order must contain at least one item.");
  }

  // Validate each item
  const validatedItems = await Promise.all(
    items.map(async (item) => {
      const product = await Product.findById(item.productId);
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`);
      }
      return {
        product: product._id,
        name: product.name,
        quantity: item.quantity,
        price: product.price,
      };
    })
  );

  const newOrder = await Order.create({
    user,
    items: validatedItems,
    totalPrice,
    deliveryMethod,
    status: "Pending",
  });

  res.status(201).json(newOrder);
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Admin
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate("user", "name email");

  if (!orders || orders.length === 0) {
    res.status(404);
    throw new Error("No orders found.");
  }

  res.json(orders);
});
