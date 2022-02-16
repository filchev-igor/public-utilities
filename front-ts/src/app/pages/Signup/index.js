"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Signup_email, _Signup_password, _Signup_passwordRepeat, _Signup_emailId, _Signup_passwordId, _Signup_passwordRepeatId, _Signup_signupButtonId, _Signup_root, _Signup_error, _Signup_componentMount, _Signup_render;
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
const FloatingLabel_1 = __importDefault(require("../../components/FloatingLabel"));
const ErrorMessage_1 = __importDefault(require("../../components/ErrorMessage"));
const roles_1 = require("../../constants/roles");
class Signup {
    constructor() {
        _Signup_email.set(this, '');
        _Signup_password.set(this, '');
        _Signup_passwordRepeat.set(this, '');
        _Signup_emailId.set(this, (0, uuid_1.v4)());
        _Signup_passwordId.set(this, (0, uuid_1.v4)());
        _Signup_passwordRepeatId.set(this, (0, uuid_1.v4)());
        _Signup_signupButtonId.set(this, (0, uuid_1.v4)());
        _Signup_root.set(this, document.getElementById('root'));
        _Signup_error.set(this, {});
        _Signup_componentMount.set(this, () => {
            const emailInput = document.getElementById(__classPrivateFieldGet(this, _Signup_emailId, "f"));
            const passwordInput = document.getElementById(__classPrivateFieldGet(this, _Signup_passwordId, "f"));
            const passwordRepeatInput = document.getElementById(__classPrivateFieldGet(this, _Signup_passwordRepeatId, "f"));
            const loginButton = document.getElementById(__classPrivateFieldGet(this, _Signup_signupButtonId, "f"));
            const auth = (0, auth_1.getAuth)();
            emailInput.addEventListener('input', (e) => {
                e.preventDefault();
                __classPrivateFieldSet(this, _Signup_email, e.target.value, "f");
            });
            passwordInput.addEventListener('input', (e) => {
                e.preventDefault();
                __classPrivateFieldSet(this, _Signup_password, e.target.value, "f");
            });
            passwordRepeatInput.addEventListener('input', (e) => {
                e.preventDefault();
                __classPrivateFieldSet(this, _Signup_passwordRepeat, e.target.value, "f");
            });
            loginButton.addEventListener('click', (e) => {
                e.preventDefault();
                if (!__classPrivateFieldGet(this, _Signup_email, "f").length || !__classPrivateFieldGet(this, _Signup_password, "f").length) {
                    return;
                }
                if (!__classPrivateFieldGet(this, _Signup_passwordRepeat, "f").length && __classPrivateFieldGet(this, _Signup_password, "f") !== __classPrivateFieldGet(this, _Signup_passwordRepeat, "f")) {
                    return;
                }
                (0, auth_1.createUserWithEmailAndPassword)(auth, __classPrivateFieldGet(this, _Signup_email, "f"), __classPrivateFieldGet(this, _Signup_password, "f"))
                    .then(async (userCredential) => {
                    await (0, auth_1.sendEmailVerification)(userCredential.user);
                    try {
                        const obj = {
                            role: roles_1.ROLES.USER,
                            name: {
                                first: '',
                                last: '',
                            },
                            addressesNumber: 0,
                            dates: {
                                created: new Date(),
                            },
                        };
                        /*
                                    userId,
                                      addresses: {
                                        country: "Lithuania",
                                          city: "Vilnius",
                                          isCity: true,
                                          street: '',
                                          number: '',
                                          postIndex: '',
                                    }, */
                        /*
                                    services: {
                                      hasMaintenanceServices: false,
                                      Cleaning of the communal areas
                                      Electricity of the communal areas
                                      Maintenance of the heating system and hot water supply system
                                      Contribution to the fund of renovation
                                      Maintanance of the intercom
                                      Householders association's properties administration
                                    }, */
                        const db = (0, firestore_1.getFirestore)();
                        await (0, firestore_1.setDoc)((0, firestore_1.doc)(db, 'users', userCredential.user.uid), obj);
                    }
                    // eslint-disable-next-line no-empty
                    catch (err) { }
                })
                    .then(() => {
                    __classPrivateFieldSet(this, _Signup_email, '', "f");
                    __classPrivateFieldSet(this, _Signup_password, '', "f");
                    __classPrivateFieldSet(this, _Signup_passwordRepeat, '', "f");
                    history.pushState({ path: '' }, '', '/');
                    location.replace('/');
                })
                    .catch((error) => {
                    __classPrivateFieldSet(this, _Signup_error, error, "f");
                    __classPrivateFieldGet(this, _Signup_root, "f").innerHTML = __classPrivateFieldGet(this, _Signup_render, "f").call(this);
                });
            });
        });
        _Signup_render.set(this, () => (`
          <div class="container-fluid usual-pages background">
            <div class="row vh-100">
              <div class="login-window col-10 col-md-6 col-lg-4 p-4 text-center mx-auto my-auto">
                ${(0, FloatingLabel_1.default)(['email', 'Email', __classPrivateFieldGet(this, _Signup_email, "f"), __classPrivateFieldGet(this, _Signup_emailId, "f"), true])}
                
                ${(0, FloatingLabel_1.default)(['password', 'Password', __classPrivateFieldGet(this, _Signup_password, "f"), __classPrivateFieldGet(this, _Signup_passwordId, "f"), true])}
                
                ${(0, FloatingLabel_1.default)(['password', 'Repeat password', __classPrivateFieldGet(this, _Signup_passwordRepeat, "f"), __classPrivateFieldGet(this, _Signup_passwordRepeatId, "f"), true])}
                
                <button type="button" id=${__classPrivateFieldGet(this, _Signup_signupButtonId, "f")} class="btn btn-outline-light">Sign up</button>
                
                <a href="/login" class="link-info d-block">I have account</a>
                
                ${__classPrivateFieldGet(this, _Signup_error, "f")?.code ? (0, ErrorMessage_1.default)(__classPrivateFieldGet(this, _Signup_error, "f")) : ''}
              </div>
            </div>
          </div>
        `));
        __classPrivateFieldGet(this, _Signup_root, "f").innerHTML = __classPrivateFieldGet(this, _Signup_render, "f").call(this);
        __classPrivateFieldGet(this, _Signup_componentMount, "f").call(this);
    }
}
_Signup_email = new WeakMap(), _Signup_password = new WeakMap(), _Signup_passwordRepeat = new WeakMap(), _Signup_emailId = new WeakMap(), _Signup_passwordId = new WeakMap(), _Signup_passwordRepeatId = new WeakMap(), _Signup_signupButtonId = new WeakMap(), _Signup_root = new WeakMap(), _Signup_error = new WeakMap(), _Signup_componentMount = new WeakMap(), _Signup_render = new WeakMap();
exports.default = Signup;
