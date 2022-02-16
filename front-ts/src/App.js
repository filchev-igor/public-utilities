"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
require("material-icons/iconfont/filled.scss");
require("material-icons/iconfont/outlined.scss");
require("bootstrap/scss/bootstrap.scss");
const AmountOfConsumed_1 = __importDefault(require("./app/pages/AmountOfConsumed"));
const navbar_1 = require("./app/constants/navbar");
const Bills_1 = __importDefault(require("./app/pages/Bills"));
const Settings_1 = __importDefault(require("./app/pages/Settings"));
const NewsAndMessages_1 = __importDefault(require("./app/pages/NewsAndMessages"));
const Contacts_1 = __importDefault(require("./app/pages/Contacts"));
const ContentAdding_1 = __importDefault(require("./app/pages/ContentAdding"));
const Page404_1 = __importDefault(require("./app/pages/Page404"));
const app_1 = require("firebase/app");
const firebase_1 = require("./app/constants/firebase");
const Login_1 = __importDefault(require("./app/pages/Login"));
const Signup_1 = __importDefault(require("./app/pages/Signup"));
const useAuth_1 = __importDefault(require("./app/utils/useAuth"));
const useLithuanian_1 = __importDefault(require("./app/utils/useLithuanian"));
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    (0, app_1.initializeApp)(firebase_1.FIREBASE_CONFIG);
    const { isInitializing, user } = (0, useAuth_1.default)();
    const { isLithuanian } = await (0, useLithuanian_1.default)();
    if (isInitializing)
        return;
    if (!!user) {
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(NewsAndMessages_1.default, null) },
                react_1.default.createElement(react_router_dom_1.Route, { path: navbar_1.SETTINGS_EN || navbar_1.SETTINGS_LT, element: react_1.default.createElement(Settings_1.default, null) },
                    react_1.default.createElement(react_router_dom_1.Route, { path: navbar_1.BILLS_EN || navbar_1.BILLS_LT, element: react_1.default.createElement(Bills_1.default, null) },
                        react_1.default.createElement(react_router_dom_1.Route, { path: navbar_1.CONTACTS_EN || navbar_1.CONTACTS_LT, element: react_1.default.createElement(Contacts_1.default, null) },
                            react_1.default.createElement(react_router_dom_1.Route, { path: navbar_1.AMOUNTS_OF_CONSUMED_EN || navbar_1.AMOUNTS_OF_CONSUMED_LT, element: react_1.default.createElement(AmountOfConsumed_1.default, null) },
                                react_1.default.createElement(react_router_dom_1.Route, { path: navbar_1.CONTENT_ADDING_EN || navbar_1.CONTENT_ADDING_LT, element: react_1.default.createElement(ContentAdding_1.default, null) },
                                    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(Page404_1.default, null) }),
                                    "} else ",
                                    react_1.default.createElement(react_router_dom_1.Routes, null,
                                        react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(NewsAndMessages_1.default, null) },
                                            react_1.default.createElement(react_router_dom_1.Route, { index: true, path: navbar_1.LOGIN_EN || LOGIN_LT, element: react_1.default.createElement(Login_1.default, null) },
                                                react_1.default.createElement(react_router_dom_1.Route, { path: navbar_1.SIGN_UP_EN || SIGN_UP_LT, element: react_1.default.createElement(Signup_1.default, null) }),
                                                "} } export default App;"))))))))));
    }
};
