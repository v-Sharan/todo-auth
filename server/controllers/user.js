import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

import { User } from "../mongodb/schema/user.js";
import { HttpError } from "../utils/HttpError.js";

dotenv.config();

export const createUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { name, email, userPhoto, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("User exist already, please login.", 422);
    return next(error);
  }

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(password, salt);

  let createdUser;

  setTimeout(() => {
    createdUser = new User({
      name,
      email,
      userPhoto,
      password: hashPassword,
      todos: [],
    });
  }, 1000);

  const token = jwt.sign(
    {
      email,
      password,
    },
    process.env.SECRET,
    { expiresIn: "1h" }
  );

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing in faild, try again later", 201);
    return next(error);
  }
  res.json({ user: createdUser.toObject(), token: token });
};

export const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { email, password } = req.body;

  const token = jwt.sign(
    {
      email,
      password,
    },
    process.env.SECRET,
    { expiresIn: "1h" }
  );

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  const comparyPassword = bcrypt.compareSync(password, existingUser.password);

  if (!existingUser || !comparyPassword) {
    return next(
      new HttpError(
        "Could not identify user, credentials seem to be wrong.",
        401
      )
    );
  }

  res.json({ user: existingUser, token: token });
};

export const findUser = async (req, res, next) => {
  const { userId } = req.params;
  let existingUser;
  try {
    existingUser = await User.findById(userId, "-password");
  } catch (err) {
    const error = new HttpError("Coudn't find user", 500);
    return next(error);
  }
  res.json({ user: existingUser });
};
