"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IndexedDb_1 = require("../IndexedDb");
const index_1 = __importDefault(require("../../index"));
const language_1 = require("../constants/language");
const useLithuanian = async () => {
    const key = language_1.IS_LITHUANIAN;
    const isLithuanian = await (0, IndexedDb_1.getDataByKey)(key, true);
    const setIsLithuanian = (isLithuanianSelected = true) => async () => {
        await (0, IndexedDb_1.setDataByKey)(isLithuanianSelected, key);
        new index_1.default(true);
    };
    return { isLithuanian, setIsLithuanian };
};
exports.default = useLithuanian;
