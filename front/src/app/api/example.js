import {BILLS_TYPE_URL} from "../constants/example.js";
import {get} from "../fetch";

/*
Get bills types (electricity, water, etc.)
 */
export const getBillsType = () => get(BILLS_TYPE_URL);