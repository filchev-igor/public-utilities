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
var _Login_email, _Login_password, _Login_emailId, _Login_passwordId, _Login_loginButtonId, _Login_root, _Login_error, _Login_componentMount, _Login_render;
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const auth_1 = require("firebase/auth");
const FloatingLabel_1 = __importDefault(require("../../components/FloatingLabel"));
const ErrorMessage_1 = __importDefault(require("../../components/ErrorMessage"));
class Login {
    constructor() {
        _Login_email.set(this, '');
        _Login_password.set(this, '');
        _Login_emailId.set(this, (0, uuid_1.v4)());
        _Login_passwordId.set(this, (0, uuid_1.v4)());
        _Login_loginButtonId.set(this, (0, uuid_1.v4)());
        _Login_root.set(this, document.getElementById('root'));
        _Login_error.set(this, {});
        _Login_componentMount.set(this, () => {
            const emailInput = document.getElementById(__classPrivateFieldGet(this, _Login_emailId, "f"));
            const passwordInput = document.getElementById(__classPrivateFieldGet(this, _Login_passwordId, "f"));
            const loginButton = document.getElementById(__classPrivateFieldGet(this, _Login_loginButtonId, "f"));
            const auth = (0, auth_1.getAuth)();
            emailInput.addEventListener('input', (e) => {
                e.preventDefault();
                __classPrivateFieldSet(this, _Login_email, e.target.value, "f");
            });
            passwordInput.addEventListener('input', (e) => {
                e.preventDefault();
                __classPrivateFieldSet(this, _Login_password, e.target.value, "f");
            });
            loginButton.addEventListener('click', (e) => {
                e.preventDefault();
                if (!__classPrivateFieldGet(this, _Login_email, "f").length || !__classPrivateFieldGet(this, _Login_password, "f").length) {
                    return;
                }
                (0, auth_1.signInWithEmailAndPassword)(auth, __classPrivateFieldGet(this, _Login_email, "f"), __classPrivateFieldGet(this, _Login_password, "f"))
                    .then(() => {
                    history.pushState({ path: '' }, '', '/');
                    location.replace('/');
                })
                    .catch((error) => {
                    __classPrivateFieldSet(this, _Login_error, error, "f");
                    __classPrivateFieldGet(this, _Login_root, "f").innerHTML = __classPrivateFieldGet(this, _Login_render, "f").call(this);
                });
            });
        });
        _Login_render.set(this, () => (`      
      <div class="container-fluid usual-pages background container-fluid">
        <div class="row min-vh-100">
          <div class="login-window col-10 col-md-6 col-lg-4 p-4 text-center mx-auto my-auto">
            ${(0, FloatingLabel_1.default)(['email', 'Email', __classPrivateFieldGet(this, _Login_email, "f"), __classPrivateFieldGet(this, _Login_emailId, "f"), false])}
            
            ${(0, FloatingLabel_1.default)(['password', 'Password', __classPrivateFieldGet(this, _Login_password, "f"), __classPrivateFieldGet(this, _Login_passwordId, "f"), false])}
            
            <button type="button" id=${__classPrivateFieldGet(this, _Login_loginButtonId, "f")} class="btn btn-outline-light">Log in</button>
            
            <a href="/sign-up" class="link-info d-block">Create new user</a>
            
            ${__classPrivateFieldGet(this, _Login_error, "f")?.code ? (0, ErrorMessage_1.default)(__classPrivateFieldGet(this, _Login_error, "f")) : ''}
          </div>
        </div>
      </div>
    `));
        __classPrivateFieldGet(this, _Login_root, "f").innerHTML = __classPrivateFieldGet(this, _Login_render, "f").call(this);
        __classPrivateFieldGet(this, _Login_componentMount, "f").call(this);
    }
}
_Login_email = new WeakMap(), _Login_password = new WeakMap(), _Login_emailId = new WeakMap(), _Login_passwordId = new WeakMap(), _Login_loginButtonId = new WeakMap(), _Login_root = new WeakMap(), _Login_error = new WeakMap(), _Login_componentMount = new WeakMap(), _Login_render = new WeakMap();
exports.default = Login;
