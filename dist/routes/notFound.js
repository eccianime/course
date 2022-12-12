"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notFound_1 = require("../controllers/notFound");
const router = express_1.default.Router();
router
    .all('/', (req, res) => {
    res.redirect('/v1');
}).all('/:anything', notFound_1.notFound)
    .all('/:anything/:anything', notFound_1.notFound)
    .all('/:anything/:anything/:anything', notFound_1.notFound)
    .all('/v1/:anything', (req, res) => {
    res.redirect('/v1');
});
router
    .all('/v1', notFound_1.notFound);
exports.default = router;
