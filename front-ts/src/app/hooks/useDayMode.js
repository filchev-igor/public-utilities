"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const IndexedDb_1 = require("../IndexedDb");
const useDayMode = async () => {
    const key = 'hasDayMode';
    const hasDayMode = await (0, IndexedDb_1.getDataByKey)(key, true);
    const setHasDayMode = (isLightModeSelected = true) => async () => {
        await (0, IndexedDb_1.setDataByKey)(isLightModeSelected, key);
        new index_1.default(true);
    };
    return { hasDayMode, setHasDayMode };
};
exports.default = useDayMode;
