import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  if (req.cookies.authToken) {
    const token = req.cookies.authToken;
    console.log(token);

    try {
      const payLoad = jwt.verify(token, "3dj5kRnDHqzfdEDUveI3QzZqTQZJxS8G");
      console.log(payLoad);
    } catch (err) {
      return res.status(401).send("Unauthorised or Session expired!");
    }

    next();
  } else {
    return res.status(401).send("Unauthorised !! Please login first");
  }
};

export default jwtAuth;
