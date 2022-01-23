import { v4 as uuidv4 } from 'uuid';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import FloatingLabel from '../../components/FloatingLabel'
import ErrorMessage from '../../components/ErrorMessage'

class Login {
  #email = '';
  #password = '';
  #emailId = uuidv4();
  #passwordId = uuidv4();
  #loginButtonId = uuidv4();
  #root = document.getElementById('root');
  #error = { };

  constructor () {
    this.#componentMount();
    this.#root.innerHTML = this.#render();
  }

  #componentMount = () => {
    window.onload = () => {
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

        signInWithEmailAndPassword(auth, this.#email, this.#password)
        .then(() => {
          location.replace('/news-and-messages');
        })
        .catch((error) => {
          this.#error = error;

          this.#root.innerHTML = this.#render();
        });
      });
    };
  }

  #render = () => {
    return (`
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto text-center">
            ${FloatingLabel(['email', 'Email', this.#email, this.#emailId])}
            
            ${FloatingLabel(['password', 'Password', this.#password, this.#passwordId])}
            
            <button type="button" id=${this.#loginButtonId} class="btn btn-outline-primary">Log in</button>
            
            <a href="/sign-up" class="link-info">Create new user</a>
            
            ${this.#error?.code && ErrorMessage(this.#error)}
          </div>
        </div>
      </div>
    `);
  }
}

export default Login;
