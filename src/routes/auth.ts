import { Router } from "express";
import { check } from "express-validator";

import {
  signInUser,
  signUpUser,
  uploadProfileImage,
} from "../controllers/auth";

const router = Router();

router.post(
  "/signin",
  check("email").isEmail().withMessage("Email is not valid"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password should not be left blank."),
  signInUser
);

router.post(
  "/signup",
  [
    check("email").isEmail().withMessage("Email is not valid."),
    check("name").not().isEmpty().withMessage("Name should not be left blank."),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password should not be left blank."),
    check("confirmPassword")
      .not()
      .isEmpty()
      .withMessage("Confirm Password should not be left blank."),
  ],
  signUpUser
);

router.post("/upload/userprofilepic", uploadProfileImage);

export default router;
