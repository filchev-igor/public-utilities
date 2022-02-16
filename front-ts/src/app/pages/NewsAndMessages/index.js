"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../../components/Navbar"));
const Content_1 = __importDefault(require("./Content"));
const NewsAndMessages = async () => (`
      ${await (0, Navbar_1.default)()}
      
      ${await (0, Content_1.default)()}
    `);
exports.default = NewsAndMessages;
