import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.model";
import { ApiError } from "../../utils/ApiError";

export const registerUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    ...data,
    password: hashedPassword,
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email })
    .populate({
      path: "role",
      populate: { path: "permissions" },
    })
    .populate("permissions");

  if (!user) throw new ApiError(404 , "User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ApiError(401, "Invalid credentials");

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  return { user, token };
};