const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["restaurant", "hotel", "cafe", "shop", "service"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    units: {
      type: String,
      enum: ["kg", "litre", "piece", "pack", "box", "bottle","ml"],
      required: true,
    },
    description: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "companies",
    },
    visited: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        review: {
          type: String,
        },
        rating: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
