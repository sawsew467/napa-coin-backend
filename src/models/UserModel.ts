const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Name must be required"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email must be required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password must be required"],
      minLength: [6, "Password must be at least 6 characters"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
