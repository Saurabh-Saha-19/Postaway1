import express from "express";
import { userRouter } from "./src/features/user/user.route.js";
import { postRouter } from "./src/features/post/post.route.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const server = express();

server.use(bodyParser.json());
server.use(cookieParser());
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);
server.get("/", (req, res) => {
  res.status(200).send("Welcome to default address");
});

export default server;
