"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("../../components/Navbar"));
const ContentAdding = async () => (`
      ${await (0, Navbar_1.default)()}
      
      <div class="container-fluid">
        <div class="row">
          
        </div>
      </div>
    `);
exports.default = ContentAdding;
