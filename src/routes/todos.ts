/** @format */

import { Router } from "express";
import { Todo } from "../model/todo";
const router = Router();

const todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

export default router;
