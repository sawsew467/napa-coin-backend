import { Request, Response, NextFunction } from "express";
import { User } from "../models/UserModel";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
    res.json("User registered");
  } catch (err) {
    
    res.json(err);
  }
};
export const login = (req: Request, res: Response, next: NextFunction) => {
  res.json("User login");
};
