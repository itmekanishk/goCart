import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price:       { type: Number, required: true, min: 0 },
  image:       { type: [String], required: true, default: [] },   
  category:    { type: String, required: true, trim: true },
  subCategory: { type: String, required: true, trim: true },
  sizes:       { type: [String], required: true, default: [] },   
  bestSeller:  { type: Boolean, required: true, default: false },
  date:        { type: Date, required: true, default: Date.now }  
}, {
  timestamps: true,   
  strict: true,
  minimize: false
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
