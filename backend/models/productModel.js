import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  countInStock: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
