import { v4 as uuidv4 } from 'uuid';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FloatingLabel from '../../components/FloatingLabel';
import ErrorMessage from '../../components/ErrorMessage';

class Login {
    #email = '';
    #password = '';
    #emailId = uuidv4();
    #passwordId = uuidv4();
    #loginButtonId = uuidv4();
    #root = document.getElementById('root');
    #error = {};

    constructor () {
        this.#root.innerHTML = this.#render();
        this.#componentMount();
    }

    #componentMount = () => {
        const emailInput = document.getElementById(this.#emailId);
        const passwordInput = document.getElementById(this.#passwordId);

        const loginButton = document.getElementById(this.#loginButtonId);

        const auth = getAuth();

        emailInput.addEventListener('input', (e) => {
            e.preventDefault();

            this.#email = e.target.value;
        });

        passwordInput.addEventListener('input', (e) => {
            e.preventDefault();

            this.#password = e.target.value;
        });

        loginButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (!this.#email.length || !this.#password.length)
                return;

            signInWithEmailAndPassword(auth, this.#email, this.#password).
                then(() => {
                    history.pushState({ path: '' }, '', `/`);
                    location.replace(`/`);
                }).
                catch((error) => {
                    this.#error = error;

                    this.#root.innerHTML = this.#render();
                });
        });
    };

    #render = () => {
        return (`      
      <div class="container-fluid usual-pages background container-fluid">
        <div class="row min-vh-100">
          <div class="login-window col-10 col-md-6 col-lg-4 p-4 text-center mx-auto my-auto">
            ${FloatingLabel(['email', 'Email', this.#email, this.#emailId, false])}
            
            ${FloatingLabel(['password', 'Password', this.#password, this.#passwordId, false])}
            
            <button type="button" id=${this.#loginButtonId} class="btn btn-outline-light">Log in</button>
            
            <a href="/sign-up" class="link-info d-block">Create new user</a>
            
            ${this.#error?.code ? ErrorMessage(this.#error) : ''}
          </div>
        </div>
      </div>
    `);
    };
}

export default Login;
