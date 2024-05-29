"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
exports.default = router;
