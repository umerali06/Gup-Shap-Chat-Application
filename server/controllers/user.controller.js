import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register controler
export const register = asyncHandler(async (req, res, next) => {
  const { fullName, username, password, gender } = req.body;

  if (!fullName || !username || !password || !gender) {
    return next(new errorHandler("All fields are required", 400));
  }

  const avatarType = gender === "male" ? "boy" : "girl";

  const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;

  const user = await User.findOne({ username });

  if (user) {
    return next(new errorHandler("Username already exists", 400));
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    fullName,
    username,
    password: hashPassword,
    gender,
    avatar,
  });

  const tokenData = {
    _Id: newUser._id,
  };

  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res
    .status(200)
    .cookie("token", {
      expire: new Date(
        Date.now() * process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    })
    .json({
      success: true,
      message: "User registered successfully",
      responseData: {
        newUser,
        token,
      },
    });
});

// login controller
export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(
      new errorHandler("Please Enter valid username or password", 400)
    );
  }

  const user = await User.findOne({ username });

  if (!user) {
    return next(
      new errorHandler("Please Enter a valid username or password", 400)
    );
  }

  const isvalid = await bcrypt.compare(password, user.password);

  if (!isvalid) {
    return next(
      new errorHandler("Please Enter a valid username or password", 400)
    );
  }

  res.status(200).json({
    success: true,
    message: "User login successfully",
    responseData: {
      user,
    },
  });
});
