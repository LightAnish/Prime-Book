import userModel from "../models/uses.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    let finduser = await userModel.findOne({ email });

    if (finduser) {
      return res.status(400).json({ message: "User already exists" });
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.status(500).json({ message: "Error in hashing password" });
      }

      let user = await userModel.create({
        firstname,
        lastname,
        email,
        password: hash,
      });
      
      let token =  generateToken(user)
      
      res.cookie("token", token,{
        httpOnly: true, // Set to true in production
        secure: false,       // Set to true in production
        sameSite: "lax", // Set to "none" in production
      })

      res.status(201).json({ message: "User created successfully",user });
    });


  } catch (error) {
    console.log("error", error);
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email }).select('+password');

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(500).json({ message: "Error in comparing password" });
      }

      if (result) {
        let token = generateToken(user);
        res.cookie("token", token,{
          httpOnly: true, // Set to true in production
          secure: false,       // Set to true in production
          sameSite: "lax", // Set to "none" in production
        })
        res.status(200).json({ message: "User logged in successfully", user });
      } else {
        res.status(400).json({ message: "Invalid credentials" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error in server" });
  }
};

export const userLogout = (req, res) => {
  if (req.cookies.token) {
    res.clearCookie("token");
    res.status(200).json({ message: "User logged out successfully" })
  }else{
    res.status(400).json({ message: "User not logged in" })
  }
}