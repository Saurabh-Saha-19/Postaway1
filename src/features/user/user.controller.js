import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

class UserController {
  signIn(req, res, next) {
    const { email, password } = req.body;
    const userMatch = UserModel.signIn(email, password);

    if (userMatch) {
      const token = jwt.sign(
        { userID: userMatch.id, email: userMatch.email },
        "3dj5kRnDHqzfdEDUveI3QzZqTQZJxS8G",
        { expiresIn: "1h" }
      );

      res.cookie("authToken", token, {
        maxAge: 1 * 60 * 60 * 1000,
      });

      res.status(200).send("Login successfull!");
    } else {
      res.status(404).send("Invalid Credentails");
    }
  }
}

export default UserController;
