import { v4 as uuidv4 } from 'uuid';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FloatingLabel from '../../components/FloatingLabel';
import ErrorMessage from '../../components/ErrorMessage';
import {doc, setDoc} from "firebase/firestore";
import { ROLES } from '../../constants/roles';
import { getFirestore } from "firebase/firestore";

class Signup {
    #email = '';
    #password = '';
    #passwordRepeat = '';
    #emailId = uuidv4();
    #passwordId = uuidv4();
    #passwordRepeatId = uuidv4();
    #signupButtonId = uuidv4();
    #root = document.getElementById('root');
    #error = { };

    constructor () {
        this.#root.innerHTML = this.#render();
        this.#componentMount();
    }

    #componentMount = () => {
        const emailInput = document.getElementById(this.#emailId);
        const passwordInput = document.getElementById(this.#passwordId);
        const passwordRepeatInput = document.getElementById(this.#passwordRepeatId);

        const loginButton = document.getElementById(this.#signupButtonId);

        const auth = getAuth();

        emailInput.addEventListener('input', (e) => {
            e.preventDefault();

            this.#email = e.target.value;
        });

        passwordInput.addEventListener('input', (e) => {
            e.preventDefault();

            this.#password = e.target.value;
        });

        passwordRepeatInput.addEventListener('input', (e) => {
            e.preventDefault();

            this.#passwordRepeat = e.target.value;
        });

        loginButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (!this.#email.length || !this.#password.length)
                return;

            if (!this.#passwordRepeat.length && this.#password !== this.#passwordRepeat)
                return;

            createUserWithEmailAndPassword(auth, this.#email, this.#password)
                .then(async (userCredential) => {
                    try {
                        const obj = {
                            role: ROLES.USER,
                            name: {
                                first: "",
                                last: "",
                            },
                            creationTime: new Date(),
                            publishedPosts: 0,
                            hasDraft: false,
                        };

                        const db = getFirestore();

                        await setDoc(doc(db, "users", userCredential.user.uid), obj);
                    }
                    // eslint-disable-next-line no-empty
                    catch (err) {}
                })
                .then(() => {
                    this.#email = '';
                    this.#password = '';
                    this.#passwordRepeat = '';
                    history.pushState({ path: '' }, '', `/`);
                    location.replace(`/`);
                })
                .catch((error) => {
                    this.#error = error;

                    this.#root.innerHTML = this.#render();
                });
        });
    };

    #render = () => {
        return (`
          <div class="container-fluid usual-pages background">
            <div class="row vh-100">
              <div class="login-window col-10 col-md-6 col-lg-4 p-4 text-center mx-auto my-auto">
                ${FloatingLabel(['email', 'Email', this.#email, this.#emailId])}
                
                ${FloatingLabel(['password', 'Password', this.#password, this.#passwordId])}
                
                ${FloatingLabel(['password', 'Repeat password', this.#passwordRepeat, this.#passwordRepeatId])}
                
                <button type="button" id=${this.#signupButtonId} class="btn btn-outline-light">Sign up</button>
                
                <a href="/login" class="link-info d-block">I have account</a>
                
                ${this.#error?.code ? ErrorMessage(this.#error) : ''}
              </div>
            </div>
          </div>
        `);
    };
}

export default Signup;
