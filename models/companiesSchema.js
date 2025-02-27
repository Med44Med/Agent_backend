const mongoose = require("mongoose");
const { Schema } = mongoose;

const companiesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true,
    },
    category: {
      type: String,
      enum: ["restaurant", "hotel", "cafe", "shop", "service"],
      required: true,
      },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    workers: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
    description: {
      type: String,
    },
    logo: {
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
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "services",
      },
    ],
    promoted: {
      type: Boolean,
      default: false,
    },
    visited: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("companies", companiesSchema);
