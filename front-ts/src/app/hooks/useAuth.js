"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
const index_1 = __importDefault(require("../../index"));
const useAuth = (isAuthInitialized) => {
    const auth = (0, auth_1.getAuth)();
    const getAuthState = () => {
        const user = auth.currentUser;
        return {
            isInitializing: !user,
            user,
        };
    };
    const state = getAuthState();
    if (!isAuthInitialized) {
        (0, auth_1.onAuthStateChanged)(auth, (user) => {
            state.isInitializing = false;
            state.user = user;
            new index_1.default(true);
        });
    }
    return state;
};
exports.default = useAuth;
